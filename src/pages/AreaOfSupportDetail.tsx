import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AreaOfSupportDetail = () => {
  const { slug } = useParams();

  const areaDetails = {
    'trauma-ptsd': {
      title: 'Trauma & PTSD',
      heroImage: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `**What it can feel like:** lingering fear, nightmares, feeling "on edge," or emotionally numb. You may avoid places or people, or blame yourself for what happened.

**How we work together:** we start by creating safety with grounding skills and calming routines. As stability grows, we gently approach memories at your pace. Through attachment work, we rebuild trust and closeness. With mentalization, we practice noticing and making sense of emotions and reactions so they don't overwhelm you.

**What to expect:** a greater sense of safety, freedom from triggers, and the ability to live with more calm and confidence.`
    },
    'anxiety-depression': {
      title: 'Anxiety & Depression',
      heroImage: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `**What it can feel like:** constant worry, panic, low energy, sadness, or harsh self-criticism. It may affect sleep, appetite, and motivation.

**How we work together:** we identify the cycle of worry or low mood and add practical tools like breathing, small wins, and routine building. Attachment work helps soften perfectionism and fear of letting others down. Mentalization gives you space to name emotions, sort facts from assumptions, and see choices when you feel stuck.

**What to expect:** clearer thinking, steadier moods, and renewed energy for the parts of life that matter to you.`
    },
    'personality-disorders': {
      title: 'Personality Disorders',
      heroImage: 'https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `**What it can feel like:** intense emotions, unstable self-image, fear of abandonment, or recurring painful relationship patterns.

**How we work together:** we create a stable therapeutic relationship where strong feelings can be understood safely. Together we track emotional triggers and practice new responses. Attachment work offers consistency and repair, while mentalization slows down reactions and helps you see different perspectives.

**What to expect:** more stable relationships, a stronger sense of self, and greater control over intense emotions.`
    },
    'eating-disorders-body-image': {
      title: 'Eating Disorders & Body Image',
      heroImage: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `**What it can feel like:** preoccupation with food, body shape, or weight; cycles of restriction or overeating; shame and isolation.

**How we work together:** we begin with stabilization and, when needed, coordinate care with other professionals. In therapy, we explore the protective role of the eating disorder without judgment. Attachment work addresses perfectionism and self-criticism, while mentalization helps uncover the emotions driving urges and develop flexible coping.

**What to expect:** freedom from rigid food rules, improved self-worth, and a healthier relationship with your body.`
    },
    'pregnancy-postpartum-support': {
      title: 'Pregnancy & Postpartum Support',
      heroImage: 'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `**What it can feel like:** mixed emotions, fears, exhaustion, or feeling "not like myself" during pregnancy or after birth.

**How we work together:** we make space for your full experience—hopes, fears, and cultural pressures. We steady daily rhythms, monitor for perinatal anxiety or depression, and, when helpful, include partners. Attachment work strengthens your confidence as a caregiver, and mentalization supports understanding both your emotions and your baby's cues.

**What to expect:** more confidence in parenting, stronger bonds with your baby, and steadier emotional wellbeing in this new chapter.`
    },
    'attachment-relationships': {
      title: 'Attachment & Relationships',
      heroImage: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `**What it can feel like:** fear of abandonment, difficulty with intimacy, patterns of unstable relationships, or challenges with emotional regulation in relationships.

**How we work together:** we explore how early experiences influence current relationships and work to heal attachment wounds. Treatment focuses on developing emotional awareness, improving communication skills, building trust, and creating healthier relationship dynamics.

**What to expect:** more secure relationship patterns and deeper, more fulfilling connections with others.`
    },
    'infant-mother-interaction': {
      title: 'Infant–Mother Interaction',
      heroImage: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `**What it can feel like:** difficulty reading your baby's signals, feeding or sleep struggles, or feeling disconnected.

**How we work together:** we observe you and your baby together, slowing down moments of interaction to practice attunement. Attachment work enhances sensitivity and responsiveness, while mentalization encourages curiosity about your baby's mind—and your own feelings—instead of frustration.

**What to expect:** a warmer, more intuitive bond with your baby, smoother routines, and more joy in parenting moments.`
    },
    'parenting-support': {
      title: 'Parenting Support',
      heroImage: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `**What it can feel like:** frequent conflicts, feeling unsure whether you are too strict or too lenient, or worrying about your child's behavior.

**How we work together:** we clarify values, observe interaction patterns, and strengthen strategies that promote cooperation. Attachment-based tools bring warmth and predictability, while mentalization helps both parents and children understand emotions before reacting.

**What to expect:** less conflict, more connection, and a greater sense of harmony in family life.`
    },
    'immigration-adjustment': {
      title: 'Immigration & Adjustment',
      heroImage: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `**What it can feel like:** grief for what you left behind, culture shock, language fatigue, or a sense of not fully belonging.

**How we work together:** we honor your story and rebuild a sense of home and identity. Attachment work provides a secure base while you explore new roles. Mentalization helps you interpret cultural and social cues with less self-blame and communicate needs clearly.

**What to expect:** feeling more at home in your new environment, stronger identity, and resilience in adapting to change.`
    },
    'grief-loss': {
      title: 'Grief & Loss',
      heroImage: 'https://images.pexels.com/photos/6749844/pexels-photo-6749844.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `**What it can feel like:** waves of sadness, anger, or guilt; feeling both close to and distant from the one you lost; struggling to re-engage with life.

**How we work together:** we create space for mourning, honoring, and meaning-making. Attachment work helps you maintain a continuing bond while moving forward. Mentalization allows you to understand shifting emotions so you are less at war with yourself.

**What to expect:** space to honor your loss, less overwhelm, and a renewed ability to carry love forward while re-engaging with life.`
    }
  };

  const area = areaDetails[slug as keyof typeof areaDetails];

  if (!area) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Area Not Found</h1>
          <Link to="/" className="text-emerald-600 hover:text-emerald-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center text-soft-emerald hover:text-deep-forest transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deep-forest via-soft-emerald to-soft-blue py-16 min-h-[400px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url("${area.heroImage}")`
          }}
        ></div>
        <div className="absolute inset-0 bg-deep-forest/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            {area.title}
          </h1>
          <p className="text-xl text-warm-sand max-w-3xl mx-auto">
            Specialized support and evidence-based treatment for your healing journey.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 xl:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-strong:text-gray-900 prose-strong:font-semibold">
            {area.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{__html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-soft-emerald to-soft-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-warm-sand mb-8">
            Take the first step toward recovery with compassionate, specialized care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-soft-emerald px-8 py-4 rounded-lg font-semibold hover:bg-warm-sand transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link 
              to="/" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-soft-emerald transition-colors"
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaOfSupportDetail;