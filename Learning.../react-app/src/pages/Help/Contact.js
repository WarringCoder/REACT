import { Form, redirect, useActionData } from "react-router-dom";

export const Contact =() =>
{
    const errors = useActionData();
    return (
      <div className="ContactContainer">
        <h2>İLETİŞİM</h2>
        <Form method="post" action="/help/contact">
          <div>
            <label htmlFor="Email">Email:</label>
            <input type="text" name="email" />
            {errors?.email && <p className="errorEmail">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message"></textarea>
            {errors?.message && <p className="errorMessage">{errors.message}</p>}
          </div>
          <button type="submit">Gönder</button>
        </Form>
      </div>
    );
}

export const contactAction = async ({request}) =>
{
    const result = await request.formData()
    const email = result.get("email");
    const message = result.get("message");

    const errors = {};

    if (typeof email !== "string" || !email.includes("@")) 
    {
      errors.email = "email girmelisiniz";
    }

    if (typeof message !== "string" || message.length < 10) 
    {
      errors.message = "mesaj için en az 10 karakter girmelisiniz";
    }

    if (Object.keys(errors).length) 
    {
      return errors;
    }

    return redirect("/")
} 