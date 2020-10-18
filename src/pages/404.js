import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/global/Section";
import cnicorn from "../images/404/cnicorn.gif";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section>
      <div className="row">
        <div className="col-6 mx-auto text-center">
          <h2 className="font-w-bold my-3 mt-md-5 mb-md-0">
            Oops.. Looks like you are missing
          </h2>
          <img
            src={cnicorn}
            width="80%"
            className="mt-5"
            alt="page not found"
          />
        </div>
      </div>
    </Section>
  </Layout>
);

export default NotFoundPage;
