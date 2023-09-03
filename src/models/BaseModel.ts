import sql from "@/server/db";
import { randomUUID } from "crypto";

export class BaseModel<T> {

  modelName: "User" | "BlogPost" | "Comments";
  constructor(modelName: "User" | "BlogPost" | "Comments") {
    this.modelName = modelName;
  }

  async create(data: Record<string, unknown>) {
    const keys = Object.keys(data) ?? [];
    const newData: Record<string, unknown> = {...data, id: randomUUID()}
    if(!keys.length) {
      throw new Error("No data to insert");
    }


    return await sql`
      INSERT INTO ${ sql(this.modelName) } ${ sql(newData, ...keys, 'id') }
    ` as unknown as T;
  }

  async createOrUpdate(data: Record<string, unknown>) {
    const keys = Object.keys(data) ?? [];
    const newData: Record<string, unknown> = {...data, id: randomUUID(), updatedAt: new Date(), createdAt: new Date()}
    const update: Record<string, unknown> = {...data, updatedAt: new Date()};
    if(!keys.length) {
      throw new Error("No data to insert");
    }

    return await sql`
      INSERT INTO ${ sql(this.modelName) } ${ sql(newData, ...keys, 'id', 'updatedAt', 'createdAt') }
      ON CONFLICT (title) DO UPDATE SET ${ sql(update, ...keys, 'updatedAt') }
    ` as unknown as T;
  }

  async delete(id: number) {
    return await sql`
      DELETE FROM ${ sql(this.modelName) }
      WHERE id = ${ id }
    `;
  }


  async update(id: number, data: Record<string, unknown>) {
    const keys = Object.keys(data) ?? [];
    if(!keys.length) {
      throw new Error("No data to update");
    }

    return await sql`
      UPDATE ${ sql(this.modelName) }
      SET ${ sql(data, ...keys) }
      WHERE id = ${ id }
    ` as unknown as T;
  }

  async getById(id: number) {
    return await sql`
      SELECT * FROM ${ sql(this.modelName) }
      WHERE id = ${ id }
    ` as unknown as T;
  }

  async getAll() {
    return await sql`
      SELECT * FROM ${ sql(this.modelName) }
    ` as unknown as T[];
  }
}
