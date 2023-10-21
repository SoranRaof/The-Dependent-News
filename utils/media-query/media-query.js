"use client";
import { useMediaQuery } from "@mui/material";

export const isCondensed = useMediaQuery("(max-width: 770px)");
export const notCondensed = useMediaQuery("(min-width: 770px)");
export const isDesktop = useMediaQuery("(min-width: 1024px)");
export const isLargeDesktop = useMediaQuery("(min-width: 1280px)");
