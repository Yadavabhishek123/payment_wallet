import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";

export const GET = async () => {
    try {
        const session = await getServerSession(authOptions); // currunt session that holds all details
        if (session.user) {
            return NextResponse.json({
                user: session.user// return user details to frontend
            })
        }
    } catch (e) {
        return NextResponse.json({
            message: "You are not logged in"
        }, {
            status: 403
        })
    }
    return NextResponse.json({
        message: "You are not logged in"
    }, {
        status: 403
    })
}