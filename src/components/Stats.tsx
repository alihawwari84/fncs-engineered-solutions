import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, Trophy, Briefcase } from "lucide-react";

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
}

const StatItem = ({ icon: Icon, value, label, suffix = "" }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = value / steps;
    const stepTime = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div 
      ref={ref}
      className="text-center p-6 engineering-card rounded-lg hover:engineering-glow transition-all duration-300 animate-counter"
    >
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-primary/10 rounded-full">
          <Icon className="h-8 w-8 text-primary" />
        </div>
      </div>
      <div className="text-4xl font-bold text-foreground mb-2">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: Briefcase,
      value: 150,
      label: "Projects Completed",
      suffix: "+"
    },
    {
      icon: Users,
      value: 250,
      label: "Happy Clients",
      suffix: "+"
    },
    {
      icon: TrendingUp,
      value: 300,
      label: "Reviews",
      suffix: "+"
    },
    {
      icon: Trophy,
      value: 120,
      label: "Awards Won",
      suffix: "+"
    }
  ];

  return (
    <section className="py-20 bg-surface-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Track Record Speaks for Itself
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Since 2018, we've been delivering engineering excellence across Jordan and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;