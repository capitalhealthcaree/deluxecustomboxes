import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const Faqs = () => {
  return (
    <>
      <div className="faq-area bg-2 pt-5 pb-5">
        <div className="container">
          <div className="section-title">
            <span className="top-title">FAQ,s</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
              vel consequatur tempora atque blanditiis exercitationem incidunt,
              alias corporis quam assumenda dicta, temporibus.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton
                        style={{ backgroundColor: "#001430", color: "white" }}
                      >
                        <span>What is coronavirus & COVID-19?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p style={{ fontWeight: "bold", color: "#001430" }}>
                        Lorem, ipsum dolor sit amet How do you Startup?
                        consectetur adipisicing elit. Accusamus ipsa error,
                        excepturi, obcaecati aliquid veniam blanditiis quas
                        voluptates maxime unde, iste minima dolores dolor
                        perferendis facilis. How do you Startup blanditiis
                        voluptates.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton
                        style={{ backgroundColor: "#001430", color: "white" }}
                      >
                        <span>What are the symptoms of COVID-19?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p style={{ fontWeight: "bold", color: "#001430" }}>
                        Lorem, ipsum dolor sit amet How do you Startup?
                        consectetur adipisicing elit. Accusamus ipsa error,
                        excepturi, obcaecati aliquid veniam blanditiis quas
                        voluptates maxime unde, iste minima dolores dolor
                        perferendis facilis. How do you Startup blanditiis
                        voluptates.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton
                        style={{ backgroundColor: "#001430", color: "white" }}
                      >
                        <span>
                          What can I do to prevent myself from coronavirus and
                          others?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p style={{ fontWeight: "bold", color: "#001430" }}>
                        Lorem, ipsum dolor sit amet How do you Startup?
                        consectetur adipisicing elit. Accusamus ipsa error,
                        excepturi, obcaecati aliquid veniam blanditiis quas
                        voluptates maxime unde, iste minima dolores dolor
                        perferendis facilis. How do you Startup blanditiis
                        voluptates.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton
                        style={{ backgroundColor: "#001430", color: "white" }}
                      >
                        <span>What should I do If I feel sick?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p style={{ fontWeight: "bold", color: "#001430" }}>
                        Lorem, ipsum dolor sit amet How do you Startup?
                        consectetur adipisicing elit. Accusamus ipsa error,
                        excepturi, obcaecati aliquid veniam blanditiis quas
                        voluptates maxime unde, iste minima dolores dolor
                        perferendis facilis. How do you Startup blanditiis
                        voluptates.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton
                        style={{ backgroundColor: "#001430", color: "white" }}
                      >
                        <span>
                          If a loved one gets sick, how can I care for them?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p style={{ fontWeight: "bold", color: "#001430" }}>
                        Lorem, ipsum dolor sit amet How do you Startup?
                        consectetur adipisicing elit. Accusamus ipsa error,
                        excepturi, obcaecati aliquid veniam blanditiis quas
                        voluptates maxime unde, iste minima dolores dolor
                        perferendis facilis. How do you Startup blanditiis
                        voluptates.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
