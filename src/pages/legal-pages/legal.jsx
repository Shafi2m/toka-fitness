import "./legal.css"

export default function Legal(){
    return(
        <>
       <div className="body">

  <header>
    <h1>ToKa Fitness</h1>
    <p>Legal Requirements</p>
  </header>

  <main class="container">

    <section class="law-card">
      <span class="number">01</span>
      <div>
        <h2>UK GDPR and Data Protection Act 2018</h2>
        <p>
          The website will collect personal information such as names,
          email addresses, ages, account details and potentially
          payment-related information. This data must be collected and
          stored securely and only used for legitimate purposes.
          Users should be informed about what information is collected
          and why it is needed.
        </p>
        <p>
          Payment card details should not be unnecessarily stored by
          the website. A secure payment provider should be used to
          process payments so that sensitive financial information
          is handled appropriately.
        </p>
      </div>
    </section>

    <section class="law-card">
      <span class="number">02</span>
      <div>
        <h2>Consumer Rights Act 2015</h2>
        <p>
          The Consumer Rights Act 2015 provides protections for
          consumers purchasing services and digital content. This
          is relevant to ToKa Fitness because users may purchase
          gym memberships and access paid digital content through
          the website. The website should clearly explain what
          customers are purchasing, including prices, membership
          terms and what is included in each membership. The Act
          also provides consumer rights when paid digital content
          does not meet the required standards.
        </p>
      </div>
    </section>

    <section class="law-card">
      <span class="number">03</span>
      <div>
        <h2>Equality Act 2010</h2>
        <p>
          The website should be designed so that disabled users
          are not unfairly prevented from accessing the service.
          This is particularly important for ToKa Fitness because
          accessibility is one of the main requirements of the
          proposed solution.
        </p>
      </div>
    </section>

    <section class="law-card">
      <span class="number">04</span>
      <div>
        <h2>Online Safety Act 2023</h2>
        <p>
          Because the website will contain social features where
          users can create and share content, the design will need
          to consider online safety. Features such as reporting,
          blocking and moderation can help prevent inappropriate
          or harmful user-generated content.
        </p>
      </div>
    </section>

    <section class="law-card">
      <span class="number">05</span>
      <div>
        <h2>Electronic Commerce Regulations</h2>
        <p>
          The website should provide users with clear information
          about the business, services, prices and terms before
          they purchase a membership. Users should also receive
          confirmation of important transactions such as
          membership purchases.
        </p>
      </div>
    </section>

  </main>

  <footer>
    <p> 2026 ToKa Fitness | Legal Requirements</p>
  </footer>
  </div>
        </>
    )
}