"use client";

import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { useTheme } from "../../utils/context/ThemeContext";
import styles from "./themSwitcher.module.scss";
import { MdPalette } from "react-icons/md";

const themes = ["light", "dark", "purple", "orange", "emerald"];

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.themeWrapper}>
      <button className={styles.settingButton} onClick={() => setOpen(!open)}>
        <MdPalette />
      </button>

      {open && (
        <div className={styles.themePopup}>
          {themes.map((item) => (
            <button
              key={item}
              className={theme === item ? styles.active : ""}
              onClick={() => {
                console.log("Changing theme to:", item);
                setTheme(item);
                setOpen(false);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
