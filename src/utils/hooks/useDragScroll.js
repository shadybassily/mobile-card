import { useState, useRef } from "react";

export const useDragScroll = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const contentRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.pageY - contentRef.current.offsetTop);
    setScrollTop(contentRef.current.scrollTop);
    contentRef.current.style.cursor = "grabbing";
    document.body.style.userSelect = "none"; //to disable text selection while dragging
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    contentRef.current.style.cursor = "default";
    document.body.style.userSelect = "auto";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    contentRef.current.style.cursor = "default";
    document.body.style.userSelect = "auto";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const y = e.pageY - contentRef.current.offsetTop;
    const scroll = (y - startY) * 2;
    contentRef.current.scrollTop = scrollTop - scroll;
  };

  return {
    contentRef,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    handleMouseMove,
  };
};
