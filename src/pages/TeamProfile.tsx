import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Download } from 'lucide-react';

const TeamProfile = () => {
  const { slug } = useParams();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const teamMembers = {
    'saeed-ghanbari': {
      name: 'Dr. Saeed Ghanbari',
      credentials: 'PhD, RCC',
      image: '/saeed-profile.jpg',
      bioSummary: 'Registered Clinical Counsellor with over 15 years of experience in trauma-informed, attachment-based, and mentalization-focused therapy. Specializing in relational therapy and developmental psychopathology.',
      cvLink: '#',
      sections: {
        education: {
          title: 'Education',
          content: [
            '**PhD in Psychology**, University of British Columbia, 2010',
            '**MA in Clinical Psychology**, Simon Fraser University, 2006',
            '**BA in Psychology (Honors)**, University of Toronto, 2004',
            '',
            '**Clinical Training:**',
            '• Advanced Training in Mentalization-Based Therapy (MBT), Anna Freud Centre, London, UK',
            '• Certificate in Trauma-Informed Care, Justice Institute of British Columbia',
            '• Attachment-Based Family Therapy Training, Philadelphia Child and Family Therapy Training Center'
          ]
        },
        researchInterests: {
          title: 'Research Interests',
          content: [
            '• Attachment theory and its application in clinical practice',
            '• Developmental psychopathology across the lifespan',
            '• Trauma and its intergenerational transmission',
            '• Mentalization and reflective functioning in therapeutic relationships',
            '• Immigration, acculturation, and mental health',
            '• Parent-child relationships and early intervention',
            '• Cultural considerations in psychotherapy'
          ]
        },
        clinicalExperience: {
          title: 'Clinical Experience',
          content: [
            '**Private Practice** (2012–Present)',
            'CoJourney Counselling and Psychotherapy Clinic',
            '• Individual, couples, and family therapy',
            '• Specialization in trauma, attachment disorders, and relationship difficulties',
            '• Work with diverse populations including immigrants, refugees, and LGBTQ+ clients',
            '',
            '**Clinical Psychologist** (2010–2012)',
            'Vancouver General Hospital, Psychiatry Department',
            '• Provided assessment and treatment for adults with complex trauma and personality disorders',
            '• Facilitated group therapy for emotion regulation and interpersonal effectiveness',
            '',
            '**Clinical Intern** (2008–2010)',
            'BC Children\'s Hospital',
            '• Child and adolescent assessment and therapy',
            '• Parent training and family therapy for developmental and behavioral concerns'
          ]
        },
        workshops: {
          title: 'Workshops & Group Facilitation',
          content: [
            '**Parenting with Connection** (Ongoing)',
            'An 8-week group for parents focusing on attachment-based parenting strategies',
            '',
            '**Understanding Trauma** (Quarterly)',
            'Psychoeducational workshop on trauma, its impacts, and pathways to healing',
            '',
            '**Couples Communication Skills** (Bi-annually)',
            'A weekend intensive for couples to improve communication and deepen connection',
            '',
            '**Emotion Regulation for Adults** (Annual)',
            'Skills-based group drawing from DBT and mentalization principles'
          ]
        },
        publications: {
          title: 'Publications & Books',
          content: [
            '**Peer-Reviewed Journal Articles:**',
            '',
            'Ghanbari, S., & Mousavi, P. (2021). "Mentalization-based interventions for immigrant families: A qualitative study." *Journal of Clinical Psychology*, 77(4), 892-908.',
            '',
            'Ghanbari, S., Lee, J., & Thompson, R. (2019). "Attachment patterns and therapeutic alliance in cross-cultural therapy." *Psychotherapy Research*, 29(6), 741-755.',
            '',
            'Ghanbari, S. (2018). "The role of parental mentalization in preventing intergenerational trauma." *Journal of Trauma & Dissociation*, 19(3), 312-328.',
            '',
            '**Book Chapters:**',
            '',
            'Ghanbari, S. (2020). "Working with attachment trauma in adults." In M. Solomon & D. Siegel (Eds.), *Healing Trauma: Attachment, Mind, Body, and Brain* (pp. 145-168). New York: Norton.',
            '',
            'Mousavi, P., & Ghanbari, S. (2017). "Cultural considerations in mentalization-based therapy." In P. Luyten & L. Mayes (Eds.), *Handbook of Mentalization-Based Treatment* (pp. 289-310). London: Wiley.'
          ]
        },
        teaching: {
          title: 'Teaching & Supervision',
          content: [
            '**Clinical Supervisor** (2015–Present)',
            'Adler University, Vancouver Campus',
            '• Supervise graduate students in their clinical practica',
            '• Teach advanced courses in psychodynamic therapy and attachment theory',
            '',
            '**Guest Lecturer** (2012–Present)',
            'University of British Columbia, Department of Psychology',
            '• Topics: Trauma-informed care, attachment theory, and cultural humility in therapy',
            '',
            '**Workshop Facilitator**',
            'Justice Institute of British Columbia',
            '• Regular training for mental health professionals on trauma and attachment'
          ]
        },
        professional: {
          title: 'Professional Membership & Service',
          content: [
            '• **Registered Clinical Counsellor (RCC)**, BC Association of Clinical Counsellors',
            '• **Member**, Canadian Psychological Association',
            '• **Member**, International Attachment Network',
            '• **Board Member**, Immigrant Services Society of BC (2018–2021)',
            '• **Peer Reviewer**, Journal of Clinical Psychology, Psychotherapy Research',
            '• **Volunteer Supervisor**, Vancouver Association for Survivors of Torture (2015–2020)'
          ]
        },
        awards: {
          title: 'Awards & Honors',
          content: [
            '• **Excellence in Clinical Training Award**, BC Association of Clinical Counsellors (2022)',
            '• **Distinguished Alumnus Award**, Simon Fraser University, Department of Psychology (2020)',
            '• **Research Grant**, Social Sciences and Humanities Research Council of Canada (2017–2019)',
            '• **Best Poster Award**, Canadian Psychological Association Annual Convention (2016)',
            '• **Graduate Fellowship**, University of British Columbia (2006–2010)'
          ]
        }
      }
    },
    'parisa-mousavi': {
      name: 'Dr. Parisa Mousavi',
      credentials: 'PhD, RCC',
      image: '/p.jpg copy.jpg',
      bioSummary: 'Registered Clinical Counsellor with over 15 years of experience in trauma-informed, attachment-based, and mentalization-focused therapy. Specializing in trauma recovery and cross-cultural mental health.',
      cvLink: '#',
      sections: {
        education: {
          title: 'Education',
          content: [
            '**PhD in Clinical Psychology**, University of British Columbia, 2009',
            '**MA in Counselling Psychology**, University of Victoria, 2005',
            '**BA in Psychology**, University of Tehran, 2002',
            '',
            '**Clinical Training:**',
            '• Advanced Training in Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)',
            '• Certificate in EMDR (Eye Movement Desensitization and Reprocessing) Therapy',
            '• Mentalization-Based Therapy (MBT) Training, Anna Freud Centre',
            '• Intensive Training in Emotionally Focused Therapy (EFT) for Couples'
          ]
        },
        researchInterests: {
          title: 'Research Interests',
          content: [
            '• Complex trauma and its neurobiological impacts',
            '• Attachment security and relationship patterns',
            '• Immigration stress and cross-cultural adaptation',
            '• Women\'s mental health and perinatal psychology',
            '• Intergenerational transmission of trauma',
            '• Body-based approaches to trauma healing',
            '• Therapeutic relationship and mentalization'
          ]
        },
        clinicalExperience: {
          title: 'Clinical Experience',
          content: [
            '**Private Practice** (2011–Present)',
            'CoJourney Counselling and Psychotherapy Clinic',
            '• Specializing in trauma, anxiety, depression, and relationship issues',
            '• Work extensively with immigrant and refugee populations',
            '• Provide culturally sensitive care to diverse communities',
            '',
            '**Clinical Psychologist** (2009–2011)',
            'Vancouver Coastal Health, Mental Health Services',
            '• Conducted assessments and treatment for adults with PTSD and complex trauma',
            '• Led psychoeducational groups on trauma recovery and coping skills',
            '',
            '**Therapist & Counsellor** (2006–2009)',
            'Immigrant Services Society of BC',
            '• Provided mental health support to refugees and newcomers',
            '• Developed and facilitated culturally adapted therapy groups'
          ]
        },
        workshops: {
          title: 'Workshops & Group Facilitation',
          content: [
            '**Healing from Trauma** (Ongoing)',
            'A 10-week psychoeducational and skills-based group for trauma survivors',
            '',
            '**Mindfulness & Self-Compassion** (Quarterly)',
            'An 8-week program integrating mindfulness with self-compassion practices',
            '',
            '**Women\'s Support Circle** (Monthly)',
            'A community-based support group for women navigating life transitions',
            '',
            '**Understanding Anxiety** (Bi-annually)',
            'Psychoeducational workshop on anxiety disorders and evidence-based coping strategies'
          ]
        },
        publications: {
          title: 'Publications & Books',
          content: [
            '**Peer-Reviewed Journal Articles:**',
            '',
            'Mousavi, P., & Ghanbari, S. (2021). "Mentalization-based interventions for immigrant families: A qualitative study." *Journal of Clinical Psychology*, 77(4), 892-908.',
            '',
            'Mousavi, P., Chen, L., & Kumar, R. (2020). "Trauma-informed care in multicultural contexts: Challenges and opportunities." *Cultural Diversity and Ethnic Minority Psychology*, 26(2), 184-197.',
            '',
            'Mousavi, P. (2019). "Attachment and immigration: The role of secure base in cross-cultural adaptation." *Attachment & Human Development*, 21(5), 456-472.',
            '',
            '**Book Chapters:**',
            '',
            'Mousavi, P. (2022). "Working with complex trauma in immigrant women." In R. Klein & V. Janoff-Bulman (Eds.), *Trauma and Recovery in Diverse Populations* (pp. 201-224). New York: Guilford Press.',
            '',
            'Mousavi, P., & Ghanbari, S. (2017). "Cultural considerations in mentalization-based therapy." In P. Luyten & L. Mayes (Eds.), *Handbook of Mentalization-Based Treatment* (pp. 289-310). London: Wiley.'
          ]
        },
        teaching: {
          title: 'Teaching & Supervision',
          content: [
            '**Adjunct Professor** (2016–Present)',
            'Adler University, Vancouver Campus',
            '• Teach courses on trauma psychology, multicultural counselling, and clinical ethics',
            '• Supervise master\'s students in their clinical training',
            '',
            '**Clinical Supervisor** (2012–Present)',
            'Private Practice',
            '• Provide individual and group supervision to registered and associate counsellors',
            '• Mentorship in trauma-informed and attachment-based approaches',
            '',
            '**Guest Lecturer**',
            'University of British Columbia, Simon Fraser University',
            '• Topics: Trauma and the brain, immigration and mental health, cultural humility'
          ]
        },
        professional: {
          title: 'Professional Membership & Service',
          content: [
            '• **Registered Clinical Counsellor (RCC)**, BC Association of Clinical Counsellors',
            '• **Certified EMDR Therapist**, EMDR International Association',
            '• **Member**, Canadian Counselling and Psychotherapy Association',
            '• **Member**, International Society for Traumatic Stress Studies',
            '• **Advisory Committee Member**, Vancouver Association for Survivors of Torture (2017–Present)',
            '• **Peer Reviewer**, Journal of Trauma & Dissociation, Transcultural Psychiatry'
          ]
        },
        awards: {
          title: 'Awards & Honors',
          content: [
            '• **Community Service Award**, BC Association of Clinical Counsellors (2023)',
            '• **Outstanding Contribution to Immigrant Mental Health**, Immigrant Services Society of BC (2021)',
            '• **Research Excellence Award**, Canadian Psychological Association (2019)',
            '• **Early Career Award**, International Society for Traumatic Stress Studies (2015)',
            '• **Doctoral Fellowship**, Social Sciences and Humanities Research Council of Canada (2005–2009)'
          ]
        }
      }
    }
  };

  const member = teamMembers[slug as keyof typeof teamMembers];

  if (!member) {
    return (
      <div className="min-h-screen bg-vintage-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-charcoal mb-4">Team Member Not Found</h1>
          <Link to="/" className="text-deep-teal hover:text-teal-accent">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-vintage-cream">
      {/* Back Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center text-deep-teal hover:text-teal-accent transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-deep-teal to-teal-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Photo */}
            <div className="flex-shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl shadow-lg object-cover object-top"
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-center lg:text-left text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 font-serif">
                {member.name}
              </h1>
              <p className="text-xl text-soft-mint mb-4">
                {member.credentials}
              </p>
              <p className="text-lg leading-relaxed max-w-3xl mb-6">
                {member.bioSummary}
              </p>
              <a
                href={member.cvLink}
                className="inline-flex items-center bg-warm-apricot text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Full CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Accordion */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {Object.entries(member.sections).map(([key, section]) => (
              <div key={key} className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleSection(key)}
                  className="w-full bg-gradient-to-r from-deep-teal to-teal-accent text-white px-6 py-4 flex items-center justify-between hover:opacity-90 transition-opacity"
                >
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openSection === key ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Accordion Body */}
                {openSection === key && (
                  <div className="bg-[#F9FAF8] px-6 py-8 text-dark-charcoal">
                    <div className="prose prose-lg max-w-none">
                      {section.content.map((line, index) => {
                        if (line === '') {
                          return <div key={index} className="h-4"></div>;
                        }
                        if (line.startsWith('**') && line.endsWith('**')) {
                          const text = line.slice(2, -2);
                          return (
                            <h4 key={index} className="text-lg font-bold text-deep-teal mb-2 mt-4">
                              {text}
                            </h4>
                          );
                        }
                        if (line.startsWith('•')) {
                          return (
                            <div key={index} className="flex items-start mb-2">
                              <span className="text-warm-apricot mr-3 mt-1">•</span>
                              <span className="leading-relaxed">{line.slice(2)}</span>
                            </div>
                          );
                        }
                        return (
                          <p key={index} className="leading-relaxed mb-3">
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-soft-mint rounded-2xl p-8 text-center shadow-md">
            <h3 className="text-2xl font-bold text-deep-teal mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-dark-charcoal mb-6 leading-relaxed max-w-2xl mx-auto">
              Book a free 15-minute consultation to see if we're a good fit. Healing is not a destination; it's a shared journey.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-warm-apricot text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-lg"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamProfile;
