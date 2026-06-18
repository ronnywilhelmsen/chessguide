// ChessGuide Web Dashboard — skeleton only (PR #39).
// Suppressed output CLASSES. The dashboard lists these as categories only and
// NEVER renders their content. Nothing here can produce them.

export const SuppressedOutputClass = {
  ENGINE_EVAL: 'ENGINE_EVAL',
  BEST_MOVE: 'BEST_MOVE',
  CANDIDATE_MOVES: 'CANDIDATE_MOVES',
  ENGINE_LINE: 'ENGINE_LINE',
  TSS_WARNING: 'TSS_WARNING',
  CCT_HINT: 'CCT_HINT',
  BUDDY_EXPLANATION: 'BUDDY_EXPLANATION',
  MODEL_OUTPUT: 'MODEL_OUTPUT',
  LEARNING_FRONTIER_HINT: 'LEARNING_FRONTIER_HINT',
  MASTERY_CLAIM: 'MASTERY_CLAIM',
  LEARNER_RATIONALE: 'LEARNER_RATIONALE',
  FEDERATION_EXPORT_ACTION: 'FEDERATION_EXPORT_ACTION',
  RAW_CV_FRAME: 'RAW_CV_FRAME',
  ANDROID_FRAME_DATA: 'ANDROID_FRAME_DATA',
} as const;

export type SuppressedOutputClass =
  (typeof SuppressedOutputClass)[keyof typeof SuppressedOutputClass];

export const SUPPRESSED_OUTPUT_CLASS_LABELS: Record<SuppressedOutputClass, string> = {
  ENGINE_EVAL: 'Engine evaluation',
  BEST_MOVE: 'Best move',
  CANDIDATE_MOVES: 'Candidate moves',
  ENGINE_LINE: 'Engine line',
  TSS_WARNING: 'TSS warning',
  CCT_HINT: 'CCT hint',
  BUDDY_EXPLANATION: 'Buddy explanation',
  MODEL_OUTPUT: 'Model output',
  LEARNING_FRONTIER_HINT: 'Learning Frontier hint',
  MASTERY_CLAIM: 'Mastery claim',
  LEARNER_RATIONALE: 'Learner rationale',
  FEDERATION_EXPORT_ACTION: 'Federation export action',
  RAW_CV_FRAME: 'Raw CV frame',
  ANDROID_FRAME_DATA: 'Android frame data',
};

// Every output class is suppressed everywhere in this skeleton.
export const ALL_SUPPRESSED_OUTPUT_CLASSES: SuppressedOutputClass[] = [
  SuppressedOutputClass.ENGINE_EVAL,
  SuppressedOutputClass.BEST_MOVE,
  SuppressedOutputClass.CANDIDATE_MOVES,
  SuppressedOutputClass.ENGINE_LINE,
  SuppressedOutputClass.TSS_WARNING,
  SuppressedOutputClass.CCT_HINT,
  SuppressedOutputClass.BUDDY_EXPLANATION,
  SuppressedOutputClass.MODEL_OUTPUT,
  SuppressedOutputClass.LEARNING_FRONTIER_HINT,
  SuppressedOutputClass.MASTERY_CLAIM,
  SuppressedOutputClass.LEARNER_RATIONALE,
  SuppressedOutputClass.FEDERATION_EXPORT_ACTION,
  SuppressedOutputClass.RAW_CV_FRAME,
  SuppressedOutputClass.ANDROID_FRAME_DATA,
];
