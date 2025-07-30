import { Download, Calendar, MapPin, Award } from 'lucide-react';
import Timeline from './Timeline';
import MovingBorderButton from './MovingBorderButton';

const Experience = () => {
  const experienceData = [
    {
      year: 'Apr 2022 - Present',
      title: 'Project Manager & Art Director',
      institution: 'Dr Akhavi Laboratory',
      description: 'Managing Social Media Projects for Dr. Akhavi Laboratory Brands',
      images:['https://ik.imagekit.io/saraalm/Portfolio/brands/seagull.svg?updatedAt=1753677570405','https://ik.imagekit.io/saraalm/Portfolio/brands/babyfirst.svg?updatedAt=1753677570294']
    },
    {
      year: '2020 - 2022',
      title: 'Advertising manager',
      institution: 'Dr Akhavi Laboratory',
      description: 'Cooperation with the following brands:',
      images:['https://ik.imagekit.io/saraalm/Portfolio/brands/seagull.svg?updatedAt=1753677570405','https://ik.imagekit.io/saraalm/Portfolio/brands/prime.svg?updatedAt=1753677568370','https://ik.imagekit.io/saraalm/Portfolio/brands/deepsense.svg?updatedAt=1753677566193','https://ik.imagekit.io/saraalm/Portfolio/brands/babyfirst.svg?updatedAt=1753677570294','https://ik.imagekit.io/saraalm/Portfolio/brands/pharmad.svg?updatedAt=1753677566970']
    },
    {
      year: 'Dec 2018 - 2019',
      title: 'Graphic Designer,Illustrator',
      institution: 'Magnolia Advertising Agency',
      description: 'Worked with the following corporations:',
      images:['https://ik.imagekit.io/saraalm/Portfolio/brands/danone1.svg?updatedAt=1753714288637','https://ik.imagekit.io/saraalm/Portfolio/brands/sunich.svg?updatedAt=1753677570287','https://ik.imagekit.io/saraalm/Portfolio/brands/danone.svg?updatedAt=1753677565463','https://ik.imagekit.io/saraalm/Portfolio/brands/mellat.svg?updatedAt=1753677565913','https://ik.imagekit.io/saraalm/Portfolio/brands/bioderma.svg?updatedAt=1753677565338','https://ik.imagekit.io/saraalm/Portfolio/brands/khoshgovar.svg?updatedAt=1753714916038']
    },
    {
      year: 'Jan 2018 - 2020',
      title: 'Freelance Graphic Designer,Illustrator',
      institution: 'Domino Dairy and Ice Cream',
      description: '',
      images:[]
    },
    {
      year: 'Feb 2017 - 2018',
      title: 'Graphic Designer,Illustrator',
      institution: 'Four Mind Advertising Agency',
      description: 'Worked with the following international corporations:',
      images:['https://ik.imagekit.io/saraalm/Portfolio/brands/samsung.svg?updatedAt=1753677568426','https://ik.imagekit.io/saraalm/Portfolio/brands/jti.svg?updatedAt=1753677566176','https://ik.imagekit.io/saraalm/Portfolio/brands/bebejunior.svg?updatedAt=1753677571467','https://ik.imagekit.io/saraalm/Portfolio/brands/danone.svg?updatedAt=1753677565463','https://ik.imagekit.io/saraalm/Portfolio/brands/pg.svg?updatedAt=1753677566517','https://ik.imagekit.io/saraalm/Portfolio/brands/duracell.svg?updatedAt=1753677565450','https://ik.imagekit.io/saraalm/Portfolio/brands/sony.svg?updatedAt=1753677570263','https://ik.imagekit.io/saraalm/Portfolio/brands/miele.svg?updatedAt=1753677566233','https://ik.imagekit.io/saraalm/Portfolio/brands/bahram.svg?updatedAt=1753677571491','https://ik.imagekit.io/saraalm/Portfolio/brands/pampers.svg?updatedAt=1753677566445']
    },
    {
      year: '2013 - 2016',
      title: 'Art Director',
      institution: 'Stavita Manufacturing Group',
      description: '',
      images:[]
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Design Excellence Award',
      year: '2023',
      description: 'Iranian Design Association'
    },
    {
      icon: Award,
      title: 'Creative Campaign of the Year',
      year: '2022',
      description: 'Marketing Guild Awards'
    },
    {
      icon: Award,
      title: 'Rising Talent Recognition',
      year: '2021',
      description: 'Young Creatives Summit'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '3', label: 'Industry Awards' }
  ];

  return (
    <section id="experience" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="display-medium">Experience & Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              A progressive career built on creativity, leadership, and delivering exceptional results
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animate-delay-200">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center glass rounded-2xl p-6 hover-lift"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Timeline */}
          <div className="space-y-8 animate-fade-in-up animate-delay-400">
            <h3 className="heading-large text-teal-800 text-center">Experience</h3>
            <Timeline items={experienceData} />
          </div>

          {/* Achievements */}
          <div className="space-y-8 animate-fade-in-up animate-delay-600">
            <h3 className="heading-large text-center">Recognition & Awards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className="glass rounded-2xl p-6 text-center hover-lift group"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <achievement.icon size={24} className="text-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-primary font-medium">
                        {achievement.year}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <div className="text-center animate-fade-in-up animate-delay-800">
            <div className="glass rounded-3xl p-8 md:p-12 shadow-portfolio max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="heading-large">Download Full Resume</h3>
                  <p className="body-large text-muted-foreground">
                    Get a comprehensive overview of my professional experience, skills, and achievements
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <MovingBorderButton href="/resume.pdf">
                    <Download size={16} />
                    <span>Download Resume</span>
                  </MovingBorderButton>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={16} className="mr-2" />
                    <span>Updated December 2024</span>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center sm:justify-start">
                    <MapPin size={16} className="mr-2 text-primary" />
                    <span>Based in Tehran, Iran</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-end">
                    <Award size={16} className="mr-2 text-primary" />
                    <span>Available for Remote Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;