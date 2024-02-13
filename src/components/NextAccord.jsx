import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NextAccord = () => {

  return (
    <>
      <section className="stepaccord mt-5 pt-5">
        <div className="container=fluid">
          <div className="row">
            <h1>
              <span className="text-wrapper-3">Examples</span> of how Actitude
              supports you
            </h1>
            <h3>We’re here for you at all stages of your journey</h3>
          </div>
        </div>
      </section>

      <section className="acsrfd bg-accr">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>Prepare</h2>
            </div>
            <div className="col-md-9 accordfsrs">
              <Accordion >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Self Study</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Access our self-study materials designed to spark your
                      curiosity and interest, and help you get started on your
                      journey:
                    </p>
                    <ul>
                      <li>
                        Learn about examples of different causes/needs in our
                        world.
                      </li>
                      <li>
                        Gain insights about activating and getting started.
                      </li>
                      <li>
                        Get examples of what can help make the world a better
                        place.
                      </li>
                      <li>
                        Study core principles of making a positive difference
                        and having impact.
                      </li>
                    </ul>
                    <button className="acc-btn">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="fa-icon"
                      />
                      Contact Us
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="acsrfd">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>Activate</h2>
            </div>
            <div className="col-md-9 accordfsrs">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    1:1 Coaching Conversations
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Book one or more 1:1 coaching conversation(s) with one of
                      our experienced Catalysts to support your journey. Through
                      these conversations we’ll explore the next steps in your
                      activation by:
                    </p>
                    <ul className="outdiscsd">
                      <li>
                        Taking a deep dive into your interest to make the world
                        a better place.
                      </li>
                      <li>
                        {" "}
                        Exploring which causes you are most passionate about.
                        For whom or what? Where?
                      </li>
                      <li>
                        Generating ideas for how you can learn more about the
                        causes you are most passionate about.
                      </li>
                      <li>
                        {" "}
                        Mapping any barriers you experience and helping you
                        understand how to overcome them.
                      </li>
                      <li>
                        {" "}
                        Talking about how you can get actively involved. What
                        would help you? What is making it difficult? What is
                        your dream vision?
                      </li>
                      <li>
                        Helping you determine how you can best contribute and
                        preparing together.
                      </li>
                      <li>
                        Agreeing on how Actitude can support you on the journey.
                      </li>
                    </ul>
                    <button className="acc-btn">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="fa-icon"
                      />
                      Book 1:1 Conversation with one of our Catalysts
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Activation Workshop</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Join one of our regular activation workshops with other
                      people who are passionate about making the world a better
                      place. The workshops are facilitated by our experienced
                      Catalysts, and will provide you with:
                    </p>
                    <ul className="outdiscsd">
                      <li>
                        A process to identify the causes you are most passionate
                        about.
                      </li>
                      <li>
                        A mapping of where you are in the activation journey.
                      </li>
                      <li>
                        {" "}
                        Identification of enablers and impediments to your
                        activation.
                      </li>
                      <li>
                        Collaboration in making a meaningful and realistic
                        activation plan.
                      </li>
                      <li>
                        Support and coaching on your progress towards taking
                        action and having real impact.{" "}
                      </li>
                      <li>
                        Assistance to evaluate the impact you have and can have.
                      </li>
                    </ul>
                    <button className="acc-btn">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="fa-icon"
                      />
                      Join upcoming Activation Workshop
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    The Actitude Research Team
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Benefit from the support of our Research Team who will
                      help you explore and learn more about relevant facts and
                      aspects of the cause you’re engaged in. You can leverage
                      our researchers’ assistance to better understand your
                      cause as well as the macro and micro landscape around it,
                      gain inspiration into NGOs and projects already
                      established, and use this knowledge to take action on your
                      cause and plan your next steps.
                    </p>
                    <button className="acc-btn">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="fa-icon"
                      />
                      Contact Us
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="acsrfd bg-accr">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>Contribute</h2>
            </div>
            <div className="col-md-9 accordfsrs">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Volunteer Opportunities</Accordion.Header>
                  <Accordion.Body>
                    <p>
                    If you decide you want to take action by joining an existing NGO, we help you 
identify relevant NGOs and volunteer opportunities. We match your unique 
volunteer passion, skills, and background with the needs of local and 
international NGOs.

                    </p>
                    <p>Once you are matched, we also help you:</p>
                    <ul className="listtype3">
                      <li>Prepare well</li>
                      <li>Stay engaged throughout the volunteer duration</li>
                      <li>Connect with other volunteers in related causes/fields</li>
                      <li>Debrief/evaluate lessons learned and key insights after the completion of your 
volunteer time
</li>
                    </ul>
                    <button className="acc-btn">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="fa-icon"
                      />
                      Contact Us
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Incubation Support</Accordion.Header>
                  <Accordion.Body>
                    <p>
                    If you choose to contribute by starting a new impact project, we help you 
transform your passion and idea into concrete action and impact through your 
own initiative. We are here to support you throughout the project and can help 
you by:
</p>
<ul className="listtype3">
  <li>Supporting you while you plan and get started.
</li>
<li>Connecting you with others passionate about the same or related 
causes/fields.</li>
<li>Supporting you throughout the project in multiple areas like research, 
project management, fundraising, outreach to partners, and ongoing 
coaching.</li>
</ul>
<button className="acc-btn">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="fa-icon"
                      />
                      Contact Us
                    </button>
                    
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="acsrfd">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2 className="desk-head">
                Accelerate 
                your impact
              </h2>
            </div>
            <div className="col-md-9 accordfsrs">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>1:1 Impact Coaching</Accordion.Header>
                  <Accordion.Body>
                    <p>
                    You’re already on your impact journey, either through an existing NGO project 
or through your own impact project. We accompany you on your path and 
gently yet uncompromisingly urge you forward, coaching you along the way to 
help ensure you make the difference in the world you seek to make.

                    </p>
                    <p>We support you through access to a dedicated, experienced Catalyst who will 
coach, mentor, and spar with you and help accelerate your actions towards 
increased impact.</p>

<button className="acc-btn">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="fa-icon"
                      />
                      Book 1:1 Impact Coaching with one of our Catalysts
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    “Activation & Impact” Conversations
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                    Join our regular community calls to learn about good practices for activation 
and impact. Hear about the progress and challenges of other Changemakers, 
and get feedback, input, and perspectives on your own progress. Many of us 
share a desire for contributing to a better world and for shaping a better future 
for humankind and our planet.
                    </p>
                    <p>Our “Activation & Impact Conversations” are an opportunity to connect, share, 
and learn together around our journey towards doing good. Some of us are on 
a clear path and are already having impact. Others struggle with how to best 
contribute. Some have reached a plateau or have run into challenges when it 
comes to time, motivation, money, solutions, energy, etc. Our conversations 
aspire to help you progress towards your ambition for impact on the cause(s) 
most important to you. </p>

<button className="acc-btn">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="fa-icon"
                      />
                      Join upcoming “Activation & Impact” Conversations
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Cause-Specific “Impact Groups”
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                    Soon, we will start cause-specific impact groups for several of the most popular 
causes or categories/groups of causes, i.e., human rights, climate change, 
children in need, poverty, animal welfare, etc. These cause-specific groups will 
meet regularly online and have thriving chat-forum discussions and 
conversations around making a sustainable impact within the selected causes.

                    </p>
                    
                    <button className="acc-btn">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="fa-icon"
                      />
                      Join the conversation in one of our cause-specific “impact groups”.
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Advisor Pool</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The advisor pool is filled with experts, thought leaders,
                      and problem solvers. If you need coaching, guidance, or
                      just someone to bounce ideas off, the advisor pool is
                      right for you. You can ask any and all questions within
                      fundraising, entrepreneurship, management, impact, legal,
                      marketing, etc.{" "}
                    </p>
                    <p>
                      Potential questions you can ask are: "How do I build a
                      sustainable and top-performing team?", "How do I
                      strengthen my business case?", "How do I scale or
                      replicate my impact?". You will still have to do the work
                      (it's still your project), but our advisors can help show
                      you the way. 
                    </p>

                    <button className="acc-btn">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="fa-icon"
                      />
                      Contact us
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="acsrfd bg-accr mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2 className="desk-head">
                Paid Services
              </h2>
            </div>
            <div className="col-md-9 accordfsrs">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Consulting Services <span> (at a cost)</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                    Leveraging years of experience as consultants, some of Actitude’s Catalysts 
provide a wide range of consulting services to start-ups and established NGOs. 
Examples of consulting services include impact analysis, strategic planning, 
board development, executive team development, leadership development, 
fundraising analysis, social media and communications advisory, change 
management, project management, etc. While these services come at a cost, 
we provide consulting services at relatively low fees, often in combination with 
some pro bono services offered as well. 
                    </p>
                    <button className="acc-btn">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="fa-icon"
                      />
                      Contact us
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Shared Services <span> (at a cost)</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                    As a new service, Actitude offers a series of shared services to the NGOs and 
startup projects we support. Examples of shared services are legal, accounting, 
finance, audit, human resource management, facility management, etc. While 
these services aren't free, we provide consulting services at a relatively low 
cost, often in combination with some pro bono services offered as well.

                    </p>
                    <button className="acc-btn">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="fa-icon"
                      />
                      Contact us
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NextAccord;
