import GoalRegDialog, {GoalRegDialogProps} from './GoalRegDialog';

export default function MonthlyGoalReg({
  visible,
  toggleDialog,
}: GoalRegDialogProps) {
  return (
    <>
      <GoalRegDialog
        visible={visible}
        toggleDialog={toggleDialog}
        select="월간"
      />
    </>
  );
}
