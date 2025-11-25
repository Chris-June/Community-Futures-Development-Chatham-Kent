export default function Disclaimer() {
  return (
    <div className="bg-background py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-foreground">
        <div className="prose prose-lg prose-neutral dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary-600 dark:prose-a:text-primary-400 mx-auto">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Website Disclaimer</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: May 20, 2025</p>
          
          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground">1. No Warranty</h2>
              <p className="mt-4">
                The information provided by Community Futures Development Corporation of Chatham-Kent ("we," "our," or "us") 
                on our website is for general informational purposes only. All information on the site is provided in good faith, 
                however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, 
                adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">2. Professional Advice</h2>
              <p className="mt-4">
                The information provided on this website does not constitute professional advice. You should not construe any 
                such information or other material as legal, tax, investment, financial, or other professional advice. 
                You alone assume the sole responsibility of evaluating the merits and risks associated with the use of 
                any information or other content on the site before making any decisions based on such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">3. External Links</h2>
              <p className="mt-4">
                Our website may contain links to external websites that are not provided or maintained by or in any way 
                affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or 
                completeness of any information on these external websites. We strongly advise you to review the privacy 
                policy and terms of service of every site you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">4. Errors and Omissions</h2>
              <p className="mt-4">
                While we have made every attempt to ensure that the information contained in this site has been obtained 
                from reliable sources, Community Futures Development Corporation of Chatham-Kent is not responsible for any 
                errors or omissions or for the results obtained from the use of this information. All information in this 
                site is provided "as is," with no guarantee of completeness, accuracy, timeliness, or of the results 
                obtained from the use of this information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">5. Fair Use</h2>
              <p className="mt-4">
                This website may contain copyrighted material the use of which has not always been specifically authorized 
                by the copyright owner. We are making such material available in our efforts to advance understanding of 
                business development, economic development, and related issues. We believe this constitutes a "fair use" 
                of any such copyrighted material as provided for in section 107 of the US Copyright Law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">6. Testimonials</h2>
              <p className="mt-4">
                The site may contain testimonials by users of our services. These testimonials reflect the real-life 
                experiences and opinions of such users. However, the experiences are personal to those particular users, 
                and may not necessarily be representative of all users of our services. We do not claim, and you should 
                not assume, that all users will have the same experiences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">7. Limitation of Liability</h2>
              <p className="mt-4">
                In no event shall Community Futures Development Corporation of Chatham-Kent, nor its directors, employees, 
                partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from your access to or use of or inability to access or use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">8. Indemnification</h2>
              <p className="mt-4">
                You agree to defend, indemnify, and hold harmless Community Futures Development Corporation of Chatham-Kent 
                and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and 
                against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses 
                (including but not limited to attorney's fees), resulting from or arising out of a) your use and access 
                of the service, or b) a breach of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">9. Changes to This Disclaimer</h2>
              <p className="mt-4">
                We reserve the right to make changes or modifications to this disclaimer at any time and for any reason. 
                We will alert you about any changes by updating the "Last updated" date of this disclaimer. Any changes 
                or modifications will be effective immediately upon posting the updated disclaimer on the site, and you 
                waive the right to receive specific notice of each such change or modification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground">10. Contact Us</h2>
              <p className="mt-4">
                If you have any questions about this disclaimer, please contact us at:
              </p>
              <address className="mt-2 not-italic">
                Community Futures Development Corporation of Chatham-Kent<br />
                124 Thames St., Chatham, ON N7L 2Y8<br />
                Email: <a href="mailto:info@cfdcck.on.ca" className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">info@cfdcck.on.ca</a><br />
                Phone: 226-996-1234
              </address>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
