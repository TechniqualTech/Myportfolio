export const POST = async (req) => {
    try {
        const data = await req.json()
        console.log("Credential", data)
        const userid = data.user_id
        const pass = data.password
        if ("Vicky@123" == userid && "Vicky@123-admin" == pass) {
            return new Response(JSON.stringify({ message: 'Success' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(JSON.stringify({ message: 'Failed' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }


    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ message: 'Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });

    }
}