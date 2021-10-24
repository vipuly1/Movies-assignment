  import React from 'react'
  import "./Grid.css"
  
    function Grid() {
      return (
          <div>
              <main>
  <section className="categories-container">
      <h1>Trending Posts</h1>
    <div className="filter"><i className="fas fa-filter filter-icon"></i><span className="filter-text">Filter by Category</span></div>
    <div className="category-names-container">
      <div className="category-names active">All</div>
      <div className="category-names">Artificial Intelligence</div>
      <div className="category-names">Cloud Computing</div>
      <div className="category-names">Devops</div>
      <div className="category-names">Programming Language</div>
      <div className="category-names">Mobile Application Development</div>
      <div className="category-names">Technology and Tools</div>
      <div className="category-names">Get a Job in a Tech Company</div>
      <div className="category-names">Others</div>
    </div>
    <section className="card-container">
    <div className="card">
      <div className="image-section">
      <img className="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png"/></div>
      <div className="description"><h3 className="image-title">Introduction To A Machine Learning Online Course</h3>
   <div className="author-line"><span className="Author">EdYoda</span><span> | </span><span className="date">24 August 2021</span></div>
        <p className="category-text">We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds</p></div>
    </div>
    
    <div className="card">
      <div className="image-section">
      <img className="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png"/></div>
      <div className="description"><h3 className="image-title">LAMP Stack Vs MEAN stack:<br></br>Choosing the right platform</h3>
   <div className="author-line"><span className="Author">EdYoda</span><span> | </span><span className="date">25 August 2021</span></div>
        <p className="category-text">In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement. Many organizations around the..</p></div>
    </div>
    
    <div className="card">
      <div className="image-section">
      <img className="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png"/></div>
      <div className="description"><h3 className="image-title">Impact of Cloud Computing in various industries</h3>
   <div className="author-line"><span className="Author">EdYoda</span><span> | </span><span className="date">26 August 2021</span></div>
        <p className="category-text">Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud technology as part of their business. Every...</p></div>
    </div>
    
    <div className="card">
      <div className="image-section">
      <img className="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png"/></div>
      <div className="description"><h3 className="image-title">Challenges of Machine Learning in Big Data Analytics</h3>
   <div className="author-line"><span className="Author">EdYoda</span><span> | </span><span className="date">27 August 2021</span></div>
        <p className="category-text">Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the way we work, live and think...</p></div>
    </div>
    
    <div className="card">
      <div className="image-section">
      <img className="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png"/></div>
      <div className="description"><h3 className="image-title">Breaking the Myths around Cybersecurity
</h3>
   <div className="author-line"><span className="Author">EdYoda</span><span> | </span><span className="date">28 August 2021</span></div>
        <p className="category-text">As the dependency on online platforms is increasing daily, cybersecurity is becoming an important concern for all companies today. The number of cyberattacks is ever-rising even after adopting every..</p></div>
    </div>
      
      <div className="card">
      <div className="image-section">
      <img className="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png"/></div>
      <div className="description"><h3 className="image-title">Importance of Data Backup and Recovery in IT</h3>
   <div className="author-line"><span className="Author">EdYoda</span><span> | </span><span className="date">29 August 2021</span></div>
        <p className="category-text">A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main precautions or a contingency plan that is necessary for every business..</p></div>
    </div>
      
      <div className="card">
      <div className="image-section">
      <img className="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png"/></div>
      <div className="description"><h3 className="image-title">What is Web Scraping</h3>
   <div className="author-line"><span className="Author">EdYoda</span><span> | </span><span className="date">30 August 2021</span></div>
        <p className="category-text">Simply put, web scraping is one of the tools developers use to gather and analyze information from the Internet.
Some websites and platforms offer application programming interfaces (APIs) which we can use to access information in a structured way</p></div>
    </div>
      
      <div className="card">
      <div className="image-section">
      <img className="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png"/></div>
      <div className="description"><h3 className="image-title">What is Income Share Agreement?</h3>
   <div className="author-line"><span className="Author">EdYoda</span><span> | </span><span className="date">31 August 2021</span></div>
        <p className="category-text">The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman, an American economist, and statistician who strongly believed in “free-market capitalism”</p></div>
    </div>
      
      <div className="card">
      <div className="image-section">
      <img className="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png"/></div>
      <div className="description"><h3 className="image-title">Practical Machine Learning with Python and Keras</h3>
   <div className="author-line"><span className="Author">EdYoda</span><span> | </span><span className="date">31 August 2021</span></div>
        <p className="category-text">Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively improve performance on a specific task) from data, without being explicitly..</p></div>
    </div>
      
    </section>
    </section>
</main>
              
          </div>
      )
  }

  export default Grid
  