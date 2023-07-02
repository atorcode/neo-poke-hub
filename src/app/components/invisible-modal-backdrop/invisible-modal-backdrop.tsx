"use client";

type InvisibleModalBackdropProps = {
  setExpandedModal: React.Dispatch<React.SetStateAction<number>>;
};
export const InvisibleModalBackdrop = ({
  setExpandedModal,
}: InvisibleModalBackdropProps) => {
  return (
    <div
      className="left-0 top-0 z-50 h-full w-full overflow-hidden"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      data-testid="modal-backdrop"
      onClick={() => {
        setExpandedModal(-1);
      }}
    ></div>
  );
};