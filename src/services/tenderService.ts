import { supabase } from "./supabase";
import type { Tender } from "../types/Tender";


export async function getTenders(): Promise<Tender[]> {

  const { data, error } = await supabase
    .from("tenders")
    .select("*")
    .order("created_at", {
      ascending: false
    });


  if (error) {
    console.error(
      "Error loading tenders:",
      error
    );

    return [];
  }


  return data || [];
}
