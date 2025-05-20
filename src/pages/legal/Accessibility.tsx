export default function Accessibility() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-indigo mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Accessibility Statement</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: May 20, 2025</p>
          
          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Our Commitment</h2>
              <p className="mt-4">
                Community Futures Development Corporation of Chatham-Kent ("CFDC") is committed to ensuring digital 
                accessibility for people with disabilities. We are continually improving the user experience for everyone 
                and applying the relevant accessibility standards to ensure we provide equal access to all users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Conformance Status</h2>
              <p className="mt-4">
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to 
                improve accessibility for people with disabilities. We aim to meet or exceed WCAG 2.1 Level AA standards 
                for our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Accessibility Features</h2>
              <p className="mt-4">Our website includes the following accessibility features:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Keyboard navigation support</li>
                <li>Alternative text for images</li>
                <li>Proper heading structure</li>
                <li>Sufficient color contrast</li>
                <li>Resizable text that doesn't break the layout</li>
                <li>Descriptive link text</li>
                <li>Form labels and instructions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Assistive Technologies</h2>
              <p className="mt-4">
                Our website is designed to be compatible with assistive technologies including:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                <li>Screen magnifiers</li>
                <li>Voice recognition software</li>
                <li>Keyboard-only navigation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Areas for Improvement</h2>
              <p className="mt-4">
                We recognize that some areas of our website may still need improvement. We are actively working to 
                enhance accessibility in the following areas:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Video captions and transcripts</li>
                <li>Complex data tables</li>
                <li>Dynamic content updates</li>
                <li>Third-party content and plugins</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Feedback</h2>
              <p className="mt-4">
                We welcome your feedback on the accessibility of our website. Please let us know if you encounter 
                accessibility barriers:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Email: <a href="mailto:accessibility@cfdcck.on.ca" className="text-primary-600 hover:text-primary-500">accessibility@cfdcck.on.ca</a></li>
                <li>Phone: 226-996-1234</li>
                <li>Mail: 124 Thames St., Chatham, ON N7L 2Y8</li>
              </ul>
              <p className="mt-4">
                We try to respond to feedback within 5 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Compatibility</h2>
              <p className="mt-4">
                Our website is designed to be compatible with the following browsers and technologies:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Latest versions of Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge</li>
                <li>JavaScript enabled browsers</li>
                <li>Mobile devices with modern operating systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Ongoing Efforts</h2>
              <p className="mt-4">
                We are committed to ongoing efforts to ensure our website remains accessible. This includes:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Regular accessibility audits</li>
                <li>Staff training on accessibility best practices</li>
                <li>Involving people with disabilities in our testing process</li>
                <li>Staying informed about accessibility standards and guidelines</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Alternative Access</h2>
              <p className="mt-4">
                If you have difficulty accessing any content on our website, please contact us and we will provide 
                the information in an alternative format. We are committed to providing reasonable accommodations 
                to individuals with disabilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
              <p className="mt-4">
                For any accessibility-related questions or concerns, please contact us at:
              </p>
              <address className="mt-2 not-italic">
                Community Futures Development Corporation of Chatham-Kent<br />
                Accessibility Coordinator<br />
                124 Thames St., Chatham, ON N7L 2Y8<br />
                Email: <a href="mailto:accessibility@cfdcck.on.ca" className="text-primary-600 hover:text-primary-500">accessibility@cfdcck.on.ca</a><br />
                Phone: 226-996-1234
              </address>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
