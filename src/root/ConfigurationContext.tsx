import { createContext, ReactNode, useContext } from 'react';
import {
    defaultCompanySectors,
    defaultContactGender,
    defaultPaymentPipelineStatuses,
    defaultPaymentStages,
    defaultLogo,
    defaultNoteStatuses,
    defaultTaskTypes,
    defaultTitle, defaultPaymentCategories,
} from './defaultConfiguration';
import { ContactGender, PaymentStage, NoteStatus } from '@/types';

// Define types for the context value
export interface ConfigurationContextValue {
    companySectors: string[];
    paymentCategories: string[];
    paymentPipelineStatuses: string[];
    paymentStages: PaymentStage[];
    noteStatuses: NoteStatus[];
    taskTypes: string[];
    title: string;
    logo: string;
    contactGender: ContactGender[];
}

export interface ConfigurationProviderProps extends ConfigurationContextValue {
    children: ReactNode;
}

// Create context with default value
export const ConfigurationContext = createContext<ConfigurationContextValue>({
    companySectors: defaultCompanySectors,
    paymentCategories: defaultPaymentCategories,
    paymentPipelineStatuses: defaultPaymentPipelineStatuses,
    paymentStages: defaultPaymentStages,
    noteStatuses: defaultNoteStatuses,
    taskTypes: defaultTaskTypes,
    title: defaultTitle,
    logo: defaultLogo,
    contactGender: defaultContactGender,
});

export const ConfigurationProvider = ({
    children,
    companySectors,
    paymentCategories,
    paymentPipelineStatuses,
    paymentStages,
    logo,
    noteStatuses,
    taskTypes,
    title,
    contactGender,
}: ConfigurationProviderProps) => (
    <ConfigurationContext.Provider
        value={{
            companySectors,
            paymentCategories,
            paymentPipelineStatuses,
            paymentStages,
            logo,
            noteStatuses,
            title,
            taskTypes,
            contactGender,
        }}
    >
        {children}
    </ConfigurationContext.Provider>
);

export const useConfigurationContext = () => useContext(ConfigurationContext);
