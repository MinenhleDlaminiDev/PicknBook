import Accordion from "./Accodion";

const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use Pick 'n Book?",
          "answer": "Discover the limitless world of Computer Science with Pick 'n Book, your gateway to a treasure trove of knowledge. Whether you're an aspiring coder, a curious learner, or a seasoned professional, our book collection offers a myriad of resources to enhance your understanding and skills. From programming fundamentals to cutting-edge technologies, Pick 'n Book provides easy access to comprehensive guides and insightful reads that cater to every level of expertise. Empower yourself with the latest trends and best practices in the field, and embark on a journey of continuous learning with us. Dive into Pick 'n Book today and unlock the potential of Computer Science at your fingertips."
        },
        {
          "id": 2,
          "question": "Can I access Pick 'n Book on mobile?",
          "answer": "Yes, with our responsive design and PWA intergration you can easily use Pick 'n Book on your mobile device"
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "Avaliable upon request with our requirements for a refund being met"
        },
        {
          "id": 4,
          "question": "Do you support Internation payments?",
          "answer": "We support all VISA and MasterCard transactions"
        }
    ];

    return ( 
        <section className="my-10 p-7 rounded dark:border-slate-700 shadow-sm">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Frequently Asked Questions</h1>
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                { faqs.map((faq) => (
                    <Accordion key={faq.id} faq={faq}/>      
                ))}
            </div>
        </section>
     );
}
 
export default Faq;