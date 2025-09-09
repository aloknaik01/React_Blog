import { ArrowRight, Play } from "lucide-react";
import heroBg from "/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-primary/90 to-bg-secondary/80 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">
              Welcome to the Future of Blogging
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover Amazing <span className="brand-gradient">Stories</span>
            <br />
            Every Day
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our community of writers and readers. Share your thoughts,
            explore new perspectives, and connect with like-minded individuals
            from around the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <button
              size="lg"
              className="bg-primary hover:bg-brand-hover text-primary-foreground font-semibold px-8 py-4 text-lg glow-effect transition-all duration-300"
            >
              Start Reading
              <ArrowRight className="ml-2 w-5 h-5" />
            </button> */}

            <button className="bg-primary hover:bg-brand-hover text-primary-foreground font-semibold px-8 py-2 text-lg rounded-md shadow-md transition-all duration-300 flex items-center glow-effect">
              Start Reading
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>

            {/* <button
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-4 text-lg transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button> */}

            <button className="border border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-2 text-lg rounded-md transition-all duration-300 flex items-center">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Articles" },
              { number: "50K+", label: "Readers" },
              { number: "1K+", label: "Writers" },
              { number: "100+", label: "Categories" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default Hero;
