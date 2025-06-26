
const CHATCODE = process.env?.CHATCODE;
const page = async ({ params }) => {
    const { code } = await params;
    if (code != CHATCODE) return <div><h1>INVALIDE CODE</h1></div>;

    return (
        <div>
            This is my page 
        </div>
    )
}

export default page
