export interface Wallpaper {
  uuid: string; // Unique identifier for the wallpaper
  user_uuid?: string; // UUID of the user who generated it (optional)
  created_at: string; // Timestamp for creation (ISO format)
  img_description: string; // Description of the image
  img_url: string; // URL of the image
  status: string; // Status of the wallpaper (e.g., "active", "pending")
}