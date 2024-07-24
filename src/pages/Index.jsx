import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package2, Zap, Code, Bot } from "lucide-react";

const features = [
  {
    icon: <Package2 className="h-6 w-6" />,
    title: "Modular Design",
    description: "Build complex systems with reusable components.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "AI-Powered",
    description: "Leverage advanced AI to accelerate development.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Code Generation",
    description: "Automatically generate high-quality code.",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Intelligent Assistance",
    description: "Get smart suggestions and problem-solving support.",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to GPT-Engineer
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Revolutionize your development process with AI-powered engineering.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {feature.icon}
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    "GPT-Engineer has transformed our development process. It's like having an AI
                    assistant that understands our needs and helps us build better software faster."
                  </p>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-muted-foreground">Software Engineer at TechCorp</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;