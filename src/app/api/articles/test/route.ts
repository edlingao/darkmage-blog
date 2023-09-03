// This is a test route, use it to test any models or other code you want to test

import ArticleModel from '@/models/Article';
import UserModel from '@/models/User';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    const articles = await  UserModel.getAll();

    return NextResponse.json({
        message: 'Articles successfully fetched',
        articles,
    });
}
