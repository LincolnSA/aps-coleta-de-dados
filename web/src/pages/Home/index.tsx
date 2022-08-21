import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Nav } from "../../components/Nav";
import { AccordionItem } from "../../components/AccordionItem";
import { DeleteFaqModal } from "../../components/DeleteFaqModal";
import { Spinner } from "../../components/Spinner";

const Home = () => {
  const [faqs, setFaqs] = useState([]);
  const [faqActive, setFaqActive] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAdmin = localStorage.getItem("userAdmin") === "true";

  useEffect(() => {
    (async () => {
      const response = await api.get("faqs", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });

      setFaqs(response.data.reverse());
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Nav />

      <div className="container">
        <figure className="text-center">
          <blockquote className="blockquote">
            <p className="display-5">
              {isAdmin ? "Todas as FAQs" : "Minhas FAQs"}
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            {isAdmin ? `Total de ${faqs.length}` : "Perguntas frequentes"}
          </figcaption>
        </figure>

        <div className="accordion accordion-flush" id="accordionFlushExample">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} faq={faq} setFaqActive={setFaqActive} />
          ))}
        </div>
      </div>

      <DeleteFaqModal faq={faqActive} />
    </>
  );
};
export { Home };
