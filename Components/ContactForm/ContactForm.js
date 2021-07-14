

export default function ContactForm() {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <h3 className="my-5">Send Me Message</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" placeholder="enter your email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text"> We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                    <textArea type="text" placeholder="some message for me"className="form-control" id="exampleInputPassword1"></textArea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    )
}
