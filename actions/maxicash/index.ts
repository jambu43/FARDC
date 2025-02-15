"use server";
import { cleanPhoneNumber } from "@/lib/utils";
import { redirect } from "next/navigation";

export async function paiementMobile(prevState: any, formData: FormData) {
  let success = false;
  const data = Object.fromEntries(formData);
  const requestBody = {
    requestData: {
      Amount: `${data.Amount}00`,
      Reference: data.Reference,
      Telephone: `243${cleanPhoneNumber(data.Telephone as string)}`,
    },
    MerchantID: process.env.MERCHAND_ID as string,
    MerchantPassword: process.env.MERCHAND_PASS as string,
    PayType: parseInt(data.PayType as string),
    CurrencyCode: data.CurrencyCode,
  };
  try {
    const response = await fetch(process.env.PAIEMENT_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      return {
        error: "Echec de paiement , veuillez recommencer",
      };
    }

    const responseData = await response.json();
    if (responseData.ResponseStatus === "Failed") {
      return {
        error: responseData.ResponseError,
      };
    }
    if (responseData.ResponseStatus.toLowerCase() === "success") {
      success = true;
    }
  } catch (error) {
    console.log("error", error);
  }
  success && redirect("https://100fardc.cd/success");
}

export async function paiementCard(prevState: any, formData: FormData) {
  let url = "";
  const data = Object.fromEntries(formData);
  const requestBody = {
    PayType: "MaxiCash",
    MerchantID: process.env.MERCHAND_ID as string,
    MerchantPassword: process.env.MERCHAND_PASS as string,
    Amount: `${data.Amount}00`,
    Currency: "USD",
    Telephone: data.Telephone,
    Language: "fr",
    Reference: data.Reference,
    SuccessURL: "https://100fardc.cd/success",
    FailureURL: "https://100fardc.cd",
    CancelURL: "https://100fardc.cd",
    NotifyURL: "",
    FirstName: data.noms,
    LastName: "",
    Email: data.email,
    cData: {
      cDate: data.expiryDate,
      cNumber: (data.cardNumber as string).replace(/ /g, ""),
      vCVV: data.cvc,
    },
  };

  try {
    const response = await fetch(process.env.PAIEMENT_CARD_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      return {
        error: "Echec de paiement , veuillez recommencer",
      };
    }

    const responseData = await response.json();
    if (responseData.ResponseStatus === "failed") {
      return {
        error: responseData.ResponseError,
      };
    }
    url = responseData.ResponseData;
  } catch (error) {
    console.log("error", error);
  }
  url && redirect(url);
}
