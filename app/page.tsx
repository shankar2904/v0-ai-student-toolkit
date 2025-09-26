import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, BookOpen, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Code className="h-4 w-4" />
            </div>
            <span className="text-xl font-bold text-balance">AI Student Toolkit</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </Link>
          </div>
          <Button asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            AI-Powered Learning Platform
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl mb-6">
            Master Your Developer Journey with <span className="text-primary">AI Guidance</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Get instant code reviews, personalized course recommendations, and predictive career guidance all in one
            comprehensive platform designed for student developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-24">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-4">
            Three Powerful Tools in One Platform
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to accelerate your development skills and career growth
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="relative overflow-hidden">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <Code className="h-6 w-6" />
              </div>
              <CardTitle className="text-balance">Automated Code Review</CardTitle>
              <CardDescription className="text-pretty">
                Get instant, explainable feedback on your code with AI-powered analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Real-time error detection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Best practice suggestions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Performance optimization tips
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <CardTitle className="text-balance">Course Recommendations</CardTitle>
              <CardDescription className="text-pretty">
                Discover personalized learning paths tailored to your skills and goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  Skill-based matching
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  Progress tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  Industry-relevant content
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <CardTitle className="text-balance">Career Guidance</CardTitle>
              <CardDescription className="text-pretty">
                Get AI-powered predictions for suitable career paths based on your profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Role compatibility analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Skill gap identification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Market trend insights
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container py-24 bg-muted/30">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Simple steps to accelerate your development journey
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-balance">Submit Your Code</h3>
            <p className="text-muted-foreground text-pretty">
              Upload your projects or paste code snippets for instant AI-powered analysis
            </p>
          </div>

          <div className="text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground mx-auto mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-balance">Get Personalized Insights</h3>
            <p className="text-muted-foreground text-pretty">
              Receive tailored feedback, course suggestions, and career recommendations
            </p>
          </div>

          <div className="text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground mx-auto mb-4">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-balance">Accelerate Your Growth</h3>
            <p className="text-muted-foreground text-pretty">
              Apply insights to improve your skills and advance your developer career
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-24">
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Code Reviews Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-muted-foreground">Courses Recommended</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">95%</div>
            <div className="text-muted-foreground">Career Match Accuracy</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
          <CardContent className="relative p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance mb-4">
              Ready to Transform Your Developer Journey?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
              Join thousands of student developers who are already using AI to accelerate their learning and career
              growth.
            </p>
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Code className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold">AI Student Toolkit</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 AI Student Toolkit. Empowering the next generation of developers.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
