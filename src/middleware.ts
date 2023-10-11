import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    return NextResponse.json({message: "Middleware response!"})
}

export const config = {
    matcher: [
        "/middleware-test"
    ],
};
