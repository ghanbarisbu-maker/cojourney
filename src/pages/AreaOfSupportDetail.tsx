import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AreaOfSupportDetail = () => {
  const { slug } = useParams();

  const areaDetails = {
    'trauma-ptsd': {
      title: 'Trauma & PTSD',
      heroImage: 'https://images.pexels.com/photos/6749844/pexels-photo-6749844.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `Trauma can profoundly impact every aspect of your life, affecting your relationships, work, and overall well-being. Post-Traumatic Stress Disorder (PTSD) may develop after experiencing or witnessing a traumatic event, leading to symptoms such as flashbacks, nightmares, severe anxiety, and emotional numbness.

Our trauma-informed approach creates a safe, supportive environment where healing can begin. We understand that trauma affects not just the mind but the entire body, and our treatment addresses both psychological and physiological aspects of trauma recovery.

We use evidence-based therapies including EMDR (Eye Movement Desensitization and Reprocessing), Cognitive Processing Therapy, and somatic approaches to help you process traumatic memories and develop healthy coping strategies. Our goal is to help you reclaim your life and move forward with renewed strength and resilience.

Recovery from trauma is possible. With the right support and treatment, you can learn to manage symptoms, rebuild trust in yourself and others, and create a meaningful life beyond your traumatic experiences.`
    },
    'anxiety-depression': {
      title: 'Anxiety & Depression',
      heroImage: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `Anxiety and depression are among the most common mental health challenges, affecting millions of people worldwide. These conditions can significantly impact your daily life, relationships, and overall quality of life, but they are highly treatable with the right support.

Anxiety may manifest as persistent worry, panic attacks, social anxiety, or specific phobias. Depression can involve persistent sadness, loss of interest in activities, changes in sleep and appetite, and feelings of hopelessness. Often, these conditions occur together, creating complex challenges that require specialized care.

Our approach combines evidence-based therapies such as Cognitive Behavioral Therapy (CBT), Mindfulness-Based Cognitive Therapy, and Acceptance and Commitment Therapy. We work together to identify triggers, develop coping strategies, and build resilience.

Treatment focuses on helping you understand the connection between thoughts, feelings, and behaviors, while developing practical tools to manage symptoms. We also explore underlying factors that may contribute to anxiety and depression, including past experiences, current stressors, and life transitions.

Recovery is possible. With proper support and treatment, you can learn to manage symptoms effectively and rediscover joy and meaning in your life.`
    },
    'personality-disorders': {
      title: 'Personality Disorders',
      heroImage: 'https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `Personality disorders involve long-standing patterns of thinking, feeling, and behaving that can cause significant distress and impact relationships, work, and daily functioning. These patterns typically develop in adolescence or early adulthood and can feel deeply ingrained.

Common personality disorders include Borderline Personality Disorder, Narcissistic Personality Disorder, Avoidant Personality Disorder, and others. Each presents unique challenges, but all can benefit from specialized therapeutic intervention.

Our approach is compassionate and non-judgmental, recognizing that personality patterns developed as adaptive responses to early experiences. We use evidence-based treatments such as Dialectical Behavior Therapy (DBT), Mentalization-Based Therapy (MBT), and Schema Therapy.

Treatment focuses on developing emotional regulation skills, improving interpersonal relationships, building distress tolerance, and creating a more stable sense of self. We work at a pace that feels comfortable for you, recognizing that change takes time and patience.

With dedicated therapeutic work, individuals with personality disorders can develop healthier coping strategies, build more satisfying relationships, and experience greater emotional stability and life satisfaction.`
    },
    'eating-disorders-body-image': {
      title: 'Eating Disorders & Body Image',
      heroImage: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `Eating disorders and body image issues can profoundly impact physical health, emotional well-being, and quality of life. These conditions often involve complex relationships with food, weight, and body image that go far beyond simple dietary choices.

Common eating disorders include Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorder, and Other Specified Feeding or Eating Disorders (OSFED). Body image concerns can occur independently or alongside eating disorders, involving distorted perceptions of one's body and intense dissatisfaction with appearance.

Our treatment approach is comprehensive and compassionate, addressing both the behavioral symptoms and underlying psychological factors. We understand that eating disorders often serve as coping mechanisms for deeper emotional issues, trauma, perfectionism, or control needs.

We use evidence-based treatments including Cognitive Behavioral Therapy for Eating Disorders (CBT-E), Family-Based Treatment when appropriate, and body image therapy techniques. Treatment focuses on normalizing eating patterns, challenging distorted thoughts about food and body image, and developing healthier coping strategies.

Recovery from eating disorders is possible with proper support. We work collaboratively with medical professionals and nutritionists when needed to ensure comprehensive care that addresses all aspects of your health and well-being.`
    },
    'pregnancy-postpartum-support': {
      title: 'Pregnancy & Postpartum Support',
      heroImage: 'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `Pregnancy and the postpartum period bring profound physical, emotional, and psychological changes. While this can be a joyful time, it can also involve significant challenges including anxiety, depression, and adjustment difficulties.

Perinatal mental health issues are common, affecting up to 20% of women during pregnancy and the first year after birth. Conditions may include prenatal anxiety and depression, postpartum depression, postpartum anxiety, and in rare cases, postpartum psychosis.

Our specialized perinatal mental health services provide support throughout your journey from pregnancy through early parenthood. We understand the unique challenges of this time, including hormonal changes, sleep deprivation, identity shifts, and the pressures of caring for a new baby.

Treatment approaches include individual therapy, couples counseling when appropriate, and support groups. We use evidence-based treatments such as Cognitive Behavioral Therapy, Interpersonal Therapy, and mindfulness-based interventions specifically adapted for the perinatal period.

We also address practical concerns such as bonding with your baby, managing expectations, building support systems, and navigating the transition to parenthood. Our goal is to help you feel confident, supported, and emotionally healthy during this important time.

Remember, seeking help is a sign of strength and self-care, not weakness. With proper support, you can overcome perinatal mental health challenges and enjoy this special time with your growing family.`
    },
    'attachment-relationships': {
      title: 'Attachment & Relationships',
      heroImage: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `Our early relationships shape how we connect with others throughout our lives. Attachment patterns formed in childhood influence our ability to trust, communicate, and maintain healthy relationships in adulthood.

Attachment difficulties may manifest as fear of abandonment, difficulty with intimacy, patterns of unstable relationships, or challenges with emotional regulation in relationships. These patterns often develop as protective responses to early experiences but can create obstacles to forming secure, satisfying connections.

Our attachment-based therapy approach helps you understand your relationship patterns and develop more secure ways of connecting with others. We explore how early experiences influence current relationships and work to heal attachment wounds.

Treatment focuses on developing emotional awareness, improving communication skills, building trust, and creating healthier relationship dynamics. We use techniques from Emotionally Focused Therapy (EFT), Attachment-Based Therapy, and Mentalization-Based Therapy.

Whether you're struggling with romantic relationships, friendships, family dynamics, or workplace relationships, we can help you develop the skills and insights needed to build more secure, satisfying connections.

Healing attachment wounds takes time and patience, but it's possible to develop more secure relationship patterns and experience deeper, more fulfilling connections with others.`
    },
    'infant-mother-interaction': {
      title: 'Infant–Mother Interaction',
      heroImage: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `The relationship between mother and infant is foundational to a child's emotional, social, and cognitive development. This early bond, formed through countless daily interactions, shapes the child's sense of security and their future relationships.

Sometimes, various factors can interfere with this crucial bonding process, including postpartum depression, anxiety, trauma history, premature birth, infant health issues, or simply feeling overwhelmed by the demands of new parenthood.

Our specialized infant-mother interaction therapy focuses on strengthening the emotional connection between you and your baby. We help identify and address barriers to bonding while supporting the development of secure attachment.

Treatment may include video feedback sessions where we observe your interactions with your baby and highlight positive moments while gently addressing areas for growth. We also provide education about infant development, communication cues, and responsive caregiving.

We address maternal mental health concerns that may impact bonding, such as postpartum depression or anxiety, while simultaneously working to enhance the mother-infant relationship. Our approach is supportive and non-judgmental, recognizing that bonding challenges are common and treatable.

The goal is to help you feel more confident and connected as a mother while supporting your baby's healthy emotional development. Strong early relationships provide the foundation for your child's future well-being and your own satisfaction as a parent.`
    },
    'parenting-support': {
      title: 'Parenting Support',
      heroImage: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `Parenting is one of life's most rewarding yet challenging experiences. Every parent faces moments of uncertainty, frustration, and self-doubt. Whether you're dealing with behavioral challenges, developmental concerns, or simply feeling overwhelmed by parenting responsibilities, support is available.

Common parenting challenges include managing difficult behaviors, setting appropriate boundaries, dealing with tantrums, navigating screen time, addressing sleep issues, and handling sibling conflicts. Parents may also struggle with their own emotional responses, feeling guilty, anxious, or inadequate.

Our parenting support services provide practical strategies and emotional support to help you feel more confident and effective as a parent. We work with parents of children of all ages, from infants to teenagers, addressing age-specific challenges and developmental needs.

Treatment approaches include parent training programs, family therapy, and individual support for parents. We focus on building positive parent-child relationships, developing effective discipline strategies, improving communication, and managing parental stress.

We also address how your own childhood experiences may influence your parenting style and help you break negative cycles while building on your strengths. Our approach is collaborative and strengths-based, recognizing that you are the expert on your own child.

Parenting support can help you develop greater patience, understanding, and effectiveness while reducing stress and increasing family harmony. Remember, seeking support shows your commitment to being the best parent you can be.`
    },
    'immigration-adjustment': {
      title: 'Immigration & Adjustment',
      heroImage: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `Immigration involves profound life changes that can impact every aspect of your existence - from language and culture to career and relationships. The process of adjusting to a new country can be both exciting and overwhelming, often involving significant stress and emotional challenges.

Common immigration-related challenges include culture shock, language barriers, loss of professional status, social isolation, discrimination, family separation, and identity conflicts. Many immigrants experience grief for what they've left behind while simultaneously trying to build a new life.

Our culturally sensitive approach recognizes the unique challenges faced by immigrants and newcomers. We understand that mental health concepts and help-seeking behaviors vary across cultures, and we adapt our approach accordingly.

Treatment focuses on helping you navigate the adjustment process while maintaining your cultural identity and values. We address practical concerns such as building social connections, managing stress, and developing coping strategies for discrimination or cultural conflicts.

We also help process the complex emotions involved in immigration, including grief, anxiety, depression, and identity confusion. Our goal is to help you build resilience, develop a sense of belonging, and create a fulfilling life in your new country.

Whether you're a recent immigrant or have been in the country for years but still struggling with adjustment issues, support is available. You don't have to navigate this journey alone.`
    },
    'grief-loss': {
      title: 'Grief & Loss',
      heroImage: 'https://images.pexels.com/photos/6749844/pexels-photo-6749844.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `Grief is a natural response to loss, but it can feel overwhelming and isolating. Loss comes in many forms - death of a loved one, divorce, job loss, health changes, or other significant life transitions. Each person's grief journey is unique, and there's no "right" way to grieve.

Grief can involve a wide range of emotions including sadness, anger, guilt, relief, and numbness. Physical symptoms such as fatigue, sleep disturbances, and changes in appetite are also common. Some people experience complicated grief, where intense grief reactions persist and interfere with daily functioning.

Our compassionate approach to grief counseling provides a safe space to process your loss and the complex emotions that accompany it. We understand that grief doesn't follow a linear timeline and that healing happens gradually.

Treatment focuses on helping you understand and navigate your grief process, develop healthy coping strategies, and find ways to honor your loss while rebuilding your life. We explore the meaning of your loss, address any guilt or regret, and help you maintain connections to what you've lost while moving forward.

We also address how grief impacts relationships and daily functioning, helping you communicate your needs to others and rebuild routines and purpose. Our goal is not to "get over" your loss but to learn to carry it in a way that allows for continued growth and meaning.

Grief is not something you have to face alone. With support, you can learn to navigate this difficult journey and find ways to honor your loss while embracing life again.`
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
          <Link to="/" className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-700 to-sky-600 py-24 min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url("${area.heroImage}")`
          }}
        ></div>
        <div className="absolute inset-0 bg-emerald-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            {area.title}
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Specialized support and evidence-based treatment for your healing journey.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 xl:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {area.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Take the first step toward recovery with compassionate, specialized care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link 
              to="/" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition-colors"
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