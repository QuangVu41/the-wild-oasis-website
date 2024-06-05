import { auth } from "../_lib/auth";

export const metadata = {
    title: "Guest area",
};

function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export default async function Page() {
    const session = await auth();
    const firstName = capitalizeFirstLetter(session.user.name.split(" ").at(0));

    return <h2 className="font-semibold text-2xl text-accent-400 mb-7">Welcome {firstName}</h2>;
}
