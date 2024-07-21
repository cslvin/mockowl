'use client';

import { Button } from '@mui/material';

interface ServiceDetailsProps {
    service: {
        serviceName: string;
        networkCallType: string;
        usageDataType: string;
        isRunning: boolean;
    };
    onDelete: (serviceName: string) => void;
    onEdit: () => void;
}

const ServiceDetails = ({ service, onDelete, onEdit }: ServiceDetailsProps) => {
    return (
        <div className="space-y-4 font-nunito">
            <h2 className="text-2xl font-bold">{service.serviceName}</h2>
            <p className="text-lg">Type: {service.networkCallType}</p>
            <p className="text-lg">Usage Data Type: {service.usageDataType}</p>
            <p className="text-lg">Status: {service.isRunning ? 'Running' : 'Stopped'}</p>
            <div className="space-x-2">
                <Button variant="contained" color="primary" onClick={onEdit} className="font-nunito">
                    Edit
                </Button>
                <Button variant="contained" color="secondary" onClick={() => onDelete(service.serviceName)} className="font-nunito">
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default ServiceDetails;
