"use client";

type InvisibleModalBackdropProps = {
  setExpandedModal: React.Dispatch<React.SetStateAction<number>>;
};
export const InvisibleModalBackdrop = ({
  setExpandedModal,
}: InvisibleModalBackdropProps) => {
  return (
    <div
      className="left-0 top-0 z-50 h-full w-full overflow-hidden bg-transparent"
      data-testid="modal-backdrop"
      onClick={() => {
        setExpandedModal(-1);
      }}
    ></div>
  );
};
