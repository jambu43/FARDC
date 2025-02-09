// @ts-nocheck
"use server";
import { getCollection } from "../../services/server";
import {getStrapiUser} from "@/actions/strapi/services/server";

export async function getDonations() {
    const user = await getStrapiUser();
    const organisation = user?.organisation?.nom
    const donations = await getCollection(`donations?populate=*&filters[organization][nom][$eq]=${organisation}`);
    return donations?.data.map((donation) => {
        return {
            name:donation?.noms,
            email:donation?.email,
            date:donation?.date,
            campaign : donation?.campaign.title,
            amount:donation?.amount,
            id:donation?.documentId

        }
    });
}

export const getDonationSumAmountByMonth = async () => {
    const user = await getStrapiUser();
    const organisation = user?.organisation?.nom
    const [
        January,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December,
    ] = await Promise.all([
        getCollection(`donations?populate=*&filters[organization][nom][$eq]=${organisation}&filters[date][$gt]=2025-01-01T00:00:00.000Z&filters[date][$lt]=2025-02-01T00:00:00.000Z&pagination[pageSize]=200`),
        getCollection(`donations?populate=*&filters[organization][nom][$eq]=${organisation}&filters[date][$gt]=2025-02-01T00:00:00.000Z&filters[date][$lt]=2025-03-01T00:00:00.000Z7&pagination[pageSize]=200`),
        getCollection(`donations?populate=*&filters[organization][nom][$eq]=${organisation}&filters[date][$gt]=2025-03-01T00:00:00.000Z&filters[date][$lt]=2025-04-01T00:00:00.000Z&pagination[pageSize]=200`),
        getCollection(`donations?populate=*&filters[organization][nom][$eq]=${organisation}&filters[date][$gt]=2025-04-01T00:00:00.000Z&filters[date][$lt]=2025-05-01T00:00:00.000Z&pagination[pageSize]=200`),
        getCollection(`donations?populate=*&filters[organization][nom][$eq]=${organisation}&filters[date][$gt]=2025-05-01T00:00:00.000Z&filters[date][$lt]=2025-06-01T00:00:00.000Z&pagination[pageSize]=200`),
        getCollection(`donations?populate=*&filters[organization][nom][$eq]=${organisation}&filters[date][$gt]=2025-06-01T00:00:00.000Z&filters[date][$lt]=2025-07-01T00:00:00.000Z&pagination[pageSize]=200`),
        getCollection(`donations?populate=*&filters[organization][nom][$eq]=${organisation}&filters[date][$gt]=2025-07-01T00:00:00.000Z&filters[date][$lt]=2025-08-01T00:00:00.000Z&pagination[pageSize]=200`),
        getCollection(`donations?populate=*&filters[organization][nom][$eq]=${organisation}&filters[date][$gt]=2025-08-01T00:00:00.000Z&filters[date][$lt]=2025-09-01T00:00:00.000Z&pagination[pageSize]=200`),
        getCollection(`donations?populate=*&filters[organization][nom][$eq]=${organisation}&filters[date][$gt]=2025-09-01T00:00:00.000Z&filters[date][$lt]=2025-10-01T00:00:00.000Z&pagination[pageSize]=200`),
        getCollection(`donations?populate=*&filters[organization][nom][$eq]=${organisation}&filters[date][$gt]=2025-10-01T00:00:00.000Z&filters[date][$lt]=2025-11-01T00:00:00.000Z&pagination[pageSize]=200`),
        getCollection(`donations?populate=*&filters[organization][nom][$eq]=${organisation}&filters[date][$gt]=2025-11-01T00:00:00.000Z&filters[date][$lt]=2025-12-01T00:00:00.000Z&pagination[pageSize]=200`),
        getCollection(`donations?populate=*&filters[organization][nom][$eq]=${organisation}&filters[date][$gt]=2025-12-01T00:00:00.000Z&pagination[pageSize]=200`),
    ]);
    return [
        { name: 'Jan', total: January?.data.reduce((sum: number, donation: any) => sum + donation?.amount, 0) },
        { name: 'Fev', total: February?.data.reduce((sum: number, donation: any) => sum + donation?.amount, 0) },
        { name: 'Mars', total: March?.data.reduce((sum: number, donation: any) => sum + donation?.amount, 0) },
        { name: 'Avr', total: April?.data.reduce((sum: number, donation: any) => sum + donation?.amount, 0) },
        { name: 'Mai', total: May?.data.reduce((sum: number, donation: any) => sum + donation?.amount, 0) },
        { name: 'Juin', total: June?.data.reduce((sum: number, donation: any) => sum + donation?.amount, 0) },
        { name: 'Juil', total: July?.data.reduce((sum: number, donation: any) => sum + donation?.amount, 0) },
        { name: 'Aout', total: August?.data.reduce((sum: number, donation: any) => sum + donation?.amount, 0) },
        { name: 'Sept', total: September?.data.reduce((sum: number, donation: any) => sum + donation?.amount, 0) },
        { name: 'Oct', total: October?.data.reduce((sum: number, donation: any) => sum + donation?.amount, 0) },
        { name: 'Nov', total: November?.data.reduce((sum: number, donation: any) => sum + donation?.amount, 0) },
        { name: 'Dec', total: December?.data.reduce((sum: number, donation: any) => sum + donation?.amount, 0) },
    ]

}




