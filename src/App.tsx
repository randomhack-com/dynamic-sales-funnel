import React from 'react';
import { ArrowRight, CheckCircle2, Star, Users } from 'lucide-react';

function App() {
  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <section className="relative bg-primary min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Modern tech team collaborating"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-accent mb-6">
              Transform Your Business Growth Today
            </h1>
            <p className="text-xl text-secondary mb-8">
              Unlock the potential of your business with our proven strategies that deliver measurable results.
            </p>
            <button className="bg-accent hover:bg-accent-light text-primary px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2">
              Get Started Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            Challenges You're Facing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-accent" />,
                title: "Low Conversion Rates",
                description: "Struggling to turn visitors into customers?"
              },
              {
                icon: <Star className="w-12 h-12 text-accent" />,
                title: "Market Competition",
                description: "Finding it hard to stand out in your industry?"
              },
              {
                icon: <CheckCircle2 className="w-12 h-12 text-accent" />,
                title: "Revenue Growth",
                description: "Not seeing the revenue growth you expected?"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-primary-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-primary text-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-accent mb-16">
            Our Solution
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Tech team collaborating"
                className="rounded-lg shadow-2xl col-span-2"
              />
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                alt="Modern data center"
                className="rounded-lg shadow-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="Tech consultation"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-2">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Proven Strategy</h3>
                    <p className="text-secondary-dark">Our methodology has helped hundreds of businesses achieve their goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-2">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Expert Support</h3>
                    <p className="text-secondary-dark">Dedicated team of experts to guide you every step of the way.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-2">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Guaranteed Results</h3>
                    <p className="text-secondary-dark">We're committed to delivering measurable outcomes for your business.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
                content: "The results we've seen since implementing their strategy have been remarkable. Our conversion rate increased by 150%."
              },
              {
                name: "Michael Chen",
                role: "Founder, GrowthLabs",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                content: "Their expertise and dedication to our success made all the difference. I highly recommend their services."
              },
              {
                name: "Emma Williams",
                role: "Marketing Director, InnovateX",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
                content: "Working with them has transformed our business. The ROI has exceeded our expectations."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-primary-light">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-primary-light">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80"
            alt="Modern tech office"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have already taken the leap. Don't miss out on your opportunity to grow.
          </p>
          <button className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
            Get Started Today <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;