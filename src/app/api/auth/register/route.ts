import type { UserRegister } from '@/lib/types/User';
import type { Error } from '@/lib/types/error';
import UserModel from '@/models/User';

import { encryptPassword } from '@/server/auth';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {

  try {
    const { email, name, password }:UserRegister = await req.json() as UserRegister;

    if (!email || !name) {
      const errorObj: Error = {
        message: 'Invalid request body',
        stack: 'email and name are required',
        code: 400,
      };
      return NextResponse.json(errorObj, { status: 400 });
    }

    const newUser = await UserModel.create({
      email,
      name,
      password: await encryptPassword(password)
    });

    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    console.error(error);
    const errorObj: Error = {
      message: 'Internal server error',
      stack: error,
      code: 500,
    };
    return NextResponse.json(errorObj, { status: 500 });
  }
}
