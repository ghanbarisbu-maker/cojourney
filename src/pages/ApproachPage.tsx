import React from 'react';
import { ArrowLeft, Heart, Brain, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApproachPage = () => {
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-teal via-teal-accent to-deep-teal py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Our Therapeutic Approach
          </h1>
          <p className="text-xl text-soft-mint max-w-3xl mx-auto">
            Trauma-informed, attachment-based, and mentalization-focused care that honors your unique journey.
          </p>
        </div>
      </section>

      {/* Core Approaches */}
      <section className="py-16 xl:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Three Pillars of Our Practice
            </h2>
          </div>

          <div className="space-y-12">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-start gap-6">
                <div className="bg-soft-mint rounded-full p-4 w-16 h-16 flex-shrink-0">
                  <Shield className="w-8 h-8 text-deep-teal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Trauma-Informed Care</h3>

                  <div className="space-y-4 text-gray-600">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">The Challenge:</h4>
                      <p className="leading-relaxed">
                        Trauma can leave you feeling unsafe in your own body and mind. You might experience hypervigilance, flashbacks, emotional numbing, or a persistent sense of threat—even when you're objectively safe. These aren't signs of weakness; they're your nervous system's protective responses that have outlived their usefulness.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">How This Approach Helps:</h4>
                      <p className="leading-relaxed">
                        Trauma-informed care recognizes that healing begins with safety. We work together to establish physical and emotional safety first, using grounding techniques and nervous system regulation before addressing traumatic memories. This approach understands that you're not broken—you're responding to overwhelming experiences in ways that once protected you. We move at your pace, never pushing you to revisit painful memories until you feel ready and resourced.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What Changes You Can Expect:</h4>
                      <p className="leading-relaxed">
                        Over time, you'll notice a greater sense of safety in your daily life. Triggers lose their power, and you'll develop the ability to stay present even during difficult moments. Many clients describe feeling more grounded, sleeping better, and experiencing freedom from the constant vigilance that exhausted them. You'll reclaim parts of your life that trauma had taken away—relationships, activities, joy, and peace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-start gap-6">
                <div className="bg-soft-mint rounded-full p-4 w-16 h-16 flex-shrink-0">
                  <Heart className="w-8 h-8 text-deep-teal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Attachment-Based Therapy</h3>

                  <div className="space-y-4 text-gray-600">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">The Challenge:</h4>
                      <p className="leading-relaxed">
                        The relationships we form early in life shape how we connect with others throughout our lives. If you struggle with fear of abandonment, difficulty trusting others, feeling unworthy of love, or repeating painful relationship patterns, these often stem from early attachment experiences. You might push people away when you need them most, or cling too tightly out of fear of loss.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">How This Approach Helps:</h4>
                      <p className="leading-relaxed">
                        Attachment-based therapy provides a corrective emotional experience. Through our consistent, reliable therapeutic relationship, you'll experience what secure attachment feels like—perhaps for the first time. We explore how your early experiences created your current relationship patterns, not to blame anyone, but to help you understand and eventually rewrite these patterns. The therapy relationship itself becomes a safe laboratory for trying new ways of connecting, expressing needs, and handling conflict or disappointment.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What Changes You Can Expect:</h4>
                      <p className="leading-relaxed">
                        You'll develop the capacity for more secure, fulfilling relationships. The fear of abandonment softens, and you'll feel more comfortable both with intimacy and with healthy independence. You'll learn to communicate needs directly rather than through protests or withdrawal. Many clients find they stop repeating painful relationship dynamics and can recognize and choose healthier partners. Self-compassion grows, replacing harsh inner criticism with a kinder, more supportive inner voice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-start gap-6">
                <div className="bg-soft-mint rounded-full p-4 w-16 h-16 flex-shrink-0">
                  <Brain className="w-8 h-8 text-deep-teal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mentalization-Based Therapy</h3>

                  <div className="space-y-4 text-gray-600">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">The Challenge:</h4>
                      <p className="leading-relaxed">
                        When emotions run high, it's easy to lose the ability to think clearly about what you're feeling or why others are acting the way they do. You might react impulsively, misread others' intentions, or feel overwhelmed by emotions you can't name or understand. This makes relationships confusing and conflict feel devastating. You might know intellectually that you're overreacting, but in the moment, you can't access that knowledge.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">How This Approach Helps:</h4>
                      <p className="leading-relaxed">
                        Mentalization is the ability to understand behavior—yours and others'—in terms of thoughts, feelings, wishes, and intentions. We practice slowing down in moments of intensity to wonder: "What am I feeling right now? What might be driving this reaction? What could be going on for the other person?" This creates space between stimulus and response. Rather than being swept away by emotion or jumping to conclusions, you develop curiosity about mental states. This isn't about controlling feelings—it's about understanding them so they inform you rather than control you.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What Changes You Can Expect:</h4>
                      <p className="leading-relaxed">
                        You'll experience greater emotional regulation—not by suppressing feelings, but by understanding them. Relationships become less reactive and more intentional. You'll catch yourself before saying things you'll regret, and you'll be able to repair ruptures more effectively. Many clients describe feeling less at the mercy of their emotions and more able to choose their responses. You'll develop genuine empathy for others while maintaining appropriate boundaries, and you'll understand yourself with compassion rather than harsh judgment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Approach */}
      <section className="py-16 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                How We Work Together
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our approach is collaborative and personalized. We believe that you are the expert on your own life, 
                and our role is to provide guidance, support, and evidence-based tools to help you achieve your goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-soft-mint rounded-full p-2 mr-4 mt-1">
                    <Users className="w-4 h-4 text-deep-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Collaborative Partnership</h3>
                    <p className="text-gray-600">We work together as partners in your healing journey.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-soft-mint rounded-full p-2 mr-4 mt-1">
                    <Heart className="w-4 h-4 text-deep-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Compassionate Care</h3>
                    <p className="text-gray-600">Every session is conducted with empathy and understanding.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-soft-mint rounded-full p-2 mr-4 mt-1">
                    <Brain className="w-4 h-4 text-deep-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Evidence-Based Methods</h3>
                    <p className="text-gray-600">We use proven therapeutic techniques tailored to your needs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Therapeutic approach"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-deep-teal to-teal-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-soft-mint mb-8">
            Experience our compassionate, evidence-based approach with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-warm-apricot text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e89551] transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link 
              to="/" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-teal transition-colors"
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApproachPage;