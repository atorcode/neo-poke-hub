"use client";

type InvisibleModalBackdropProps = {
  setExpandedModal: React.Dispatch<React.SetStateAction<number>>;
};
export const InvisibleModalBackdrop = ({
  setExpandedModal,
}: InvisibleModalBackdropProps) => {
  return (
    <div
      className="fixed left-0 top-0 z-0 h-full overflow-hidden"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        width: "calc(100vw - 17px)",
      }}
      data-testid="modal-backdrop"
      onClick={() => {
        setExpandedModal(-1);
      }}
    ></div>
  );
};
