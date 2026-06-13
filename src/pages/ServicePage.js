import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ServicePageLayout from '../components/ServicePageLayout';
import { getServiceBySlug, services } from '../data/services';

const ServicePage = () => {
    const { slug } = useParams();
    const service = getServiceBySlug(slug);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const relatedServices = services
        .filter((s) => s.slug !== service.slug)
        .slice(0, 3);

    return <ServicePageLayout service={service} relatedServices={relatedServices} />;
};

export default ServicePage;
