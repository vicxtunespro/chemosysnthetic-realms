import React from 'react'
import FeatureDetails from '@/app/components/featureDetails';
import Image from 'next/image';
import features from '@/app/data/features';

export default function featurePage({ params }) {
  const feature = features.find((feature) => feature.id == params.id);

  return (
    <FeatureDetails
    name={feature.name}
    imageURL={feature.imageURL}
    />
  )
}
