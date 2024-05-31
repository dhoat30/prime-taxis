

import { NextResponse } from 'next/server'

export async function POST(req, res) {
    const { email, firstName, typeOfService, budget, message } = await req.json();
    if (4 == 4) {
        return NextResponse.json({ message: "This Worked", success: true, data: "hubspot not setup" });
    }

}

export async function GET(req, res) {
    return NextResponse.json(res)

};