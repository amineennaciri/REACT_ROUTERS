import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
    //throw new Error("oh dang!"); this is used to throw an error on purpose.
    await deleteContact(params.contactId);
    return redirect("/");
}