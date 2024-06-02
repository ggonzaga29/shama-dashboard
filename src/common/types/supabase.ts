export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      booking_files: {
        Row: {
          booking_id: string
          created_at: string | null
          file_name: string | null
          file_url: string
          id: string
          updated_at: string | null
        }
        Insert: {
          booking_id: string
          created_at?: string | null
          file_name?: string | null
          file_url: string
          id?: string
          updated_at?: string | null
        }
        Update: {
          booking_id?: string
          created_at?: string | null
          file_name?: string | null
          file_url?: string
          id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_client"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      booking_invoices: {
        Row: {
          amount: number | null
          booking_id: string
          created_at: string | null
          deposit_amount: number | null
          id: string
          payment_deadline: string
          payment_method: Database["public"]["Enums"]["mode_of_payment"] | null
          status: Database["public"]["Enums"]["invoice_status"] | null
          updated_at: string | null
        }
        Insert: {
          amount?: number | null
          booking_id: string
          created_at?: string | null
          deposit_amount?: number | null
          id?: string
          payment_deadline: string
          payment_method?: Database["public"]["Enums"]["mode_of_payment"] | null
          status?: Database["public"]["Enums"]["invoice_status"] | null
          updated_at?: string | null
        }
        Update: {
          amount?: number | null
          booking_id?: string
          created_at?: string | null
          deposit_amount?: number | null
          id?: string
          payment_deadline?: string
          payment_method?: Database["public"]["Enums"]["mode_of_payment"] | null
          status?: Database["public"]["Enums"]["invoice_status"] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_booking"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          client_id: string
          created_at: string | null
          driver_id: string
          drop_off_location: string | null
          end_datetime: string
          id: string
          notes: string | null
          pick_up_location: string | null
          start_datetime: string
          status: Database["public"]["Enums"]["booking_status"] | null
          type: Database["public"]["Enums"]["booking_type"] | null
          updated_at: string | null
          user_id: string
          vehicle_id: string
        }
        Insert: {
          client_id: string
          created_at?: string | null
          driver_id: string
          drop_off_location?: string | null
          end_datetime: string
          id?: string
          notes?: string | null
          pick_up_location?: string | null
          start_datetime: string
          status?: Database["public"]["Enums"]["booking_status"] | null
          type?: Database["public"]["Enums"]["booking_type"] | null
          updated_at?: string | null
          user_id: string
          vehicle_id: string
        }
        Update: {
          client_id?: string
          created_at?: string | null
          driver_id?: string
          drop_off_location?: string | null
          end_datetime?: string
          id?: string
          notes?: string | null
          pick_up_location?: string | null
          start_datetime?: string
          status?: Database["public"]["Enums"]["booking_status"] | null
          type?: Database["public"]["Enums"]["booking_type"] | null
          updated_at?: string | null
          user_id?: string
          vehicle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_client"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_driver"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_vehicle"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      client_files: {
        Row: {
          client_id: string
          created_at: string | null
          file_name: string | null
          file_url: string
          id: string
          updated_at: string | null
        }
        Insert: {
          client_id: string
          created_at?: string | null
          file_name?: string | null
          file_url: string
          id?: string
          updated_at?: string | null
        }
        Update: {
          client_id?: string
          created_at?: string | null
          file_name?: string | null
          file_url?: string
          id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_client"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          business_name: string | null
          created_at: string | null
          customer_type: Database["public"]["Enums"]["customer_type"] | null
          email: string | null
          id: string
          name: string
          notes: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          business_name?: string | null
          created_at?: string | null
          customer_type?: Database["public"]["Enums"]["customer_type"] | null
          email?: string | null
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          business_name?: string | null
          created_at?: string | null
          customer_type?: Database["public"]["Enums"]["customer_type"] | null
          email?: string | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      driver_files: {
        Row: {
          created_at: string | null
          driver_id: string
          file_name: string | null
          file_url: string
          id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          driver_id: string
          file_name?: string | null
          file_url: string
          id?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          driver_id?: string
          file_name?: string | null
          file_url?: string
          id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_client"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
        ]
      }
      driver_queue: {
        Row: {
          created_at: string | null
          driver_id: string
          id: string
          position: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          driver_id: string
          id?: string
          position?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          driver_id?: string
          id?: string
          position?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_driver"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
        ]
      }
      driver_queue_declinations: {
        Row: {
          created_at: string | null
          driver_id: string
          id: string
          position_at: number | null
          reason: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          driver_id: string
          id?: string
          position_at?: number | null
          reason?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          driver_id?: string
          id?: string
          position_at?: number | null
          reason?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_driver_declination"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
        ]
      }
      drivers: {
        Row: {
          created_at: string | null
          email: string | null
          first_name: string
          id: string
          last_name: string
          middle_name: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          first_name: string
          id?: string
          last_name: string
          middle_name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          first_name?: string
          id?: string
          last_name?: string
          middle_name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string
          status: Database["public"]["Enums"]["notification_status"] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          status?: Database["public"]["Enums"]["notification_status"] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          status?: Database["public"]["Enums"]["notification_status"] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          avatar: string | null
          bio: string | null
          first_name: string | null
          id: string
          is_first_login: boolean | null
          last_name: string | null
          phone_number: string | null
        }
        Insert: {
          address?: string | null
          avatar?: string | null
          bio?: string | null
          first_name?: string | null
          id: string
          is_first_login?: boolean | null
          last_name?: string | null
          phone_number?: string | null
        }
        Update: {
          address?: string | null
          avatar?: string | null
          bio?: string | null
          first_name?: string | null
          id?: string
          is_first_login?: boolean | null
          last_name?: string | null
          phone_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      availability_status: "available" | "under maintenance" | "rented"
      booking_status: "booked" | "payment_pending" | "completed"
      booking_type: "self_drive" | "flexible_driving" | "pick_up_drop_off"
      customer_type: "personal" | "hotel" | "travel_agency" | "other"
      invoice_status: "pending" | "paid"
      maintenance_status: "scheduled" | "in_progress" | "completed"
      mode_of_payment: "cash" | "card" | "e-wallet" | "bank"
      notification_status: "unread" | "read"
      status: "available" | "under maintenance" | "rented"
    }
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;
