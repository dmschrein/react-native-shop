interface Toast {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
}

export function useToast() {
  const toast = ({ title, description, variant = "default" }: Toast) => {
    // For now, just console.log the toast
    console.log({ title, description, variant });
  };

  return { toast };
}
