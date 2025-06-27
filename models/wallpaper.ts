import { Wallpaper } from "@/types/wallpaper";
import { getSupabaseClient } from "./db";

export async function insertWallpaper(wallpaper: Wallpaper) {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase.from("wallpapers").insert(wallpaper);

  if (error) throw error;

  return data;
}

export async function getWallpapers(
  page: number = 1,
  limit: number = 50
): Promise<Wallpaper[] | undefined> {
  const offset = (page - 1) * limit;

  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("wallpapers")
    .select("*")
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    return undefined;
  }

  return data;
}