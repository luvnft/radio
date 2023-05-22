import { groq } from "next-sanity";
import type { Image } from "sanity";

export const settingsQuery = groq`*[_type == "settings"][0]`;

export interface Settings {
  title: string;
  description: string;
  ogImage: Image;
}

export const partnersQuery = groq`*[_type == "partner"]`;

export interface Partner {
  name: string;
  logo: Image;
  /**
   * PortableText
   */
  details: any[];
}

export const homeQuery = groq`*[_type == "home"][0]`;

export interface Home {
  apply_cta_text: string;
  apply_cta_url: string;
  apply_heading: string;
  apply_subheading: string;
}
