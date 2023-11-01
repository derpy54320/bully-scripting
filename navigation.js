var use_manual_navigation = false;
var list_of_functions = [
	"AddArrestRestartPoint","AddBlipForCar","AddBlipForChar","AddBlipForPickup","AddBlipForProp","AddInteriorArrestRestartPoint","AddInteriorAsleepRestartPoint","AddInteriorKORestartPoint",
	"AddKORestartPoint","AddPAnimToNextCutscene","AllowAreaTransitions","AreaActivatePopulationTrigger","AreaAddAmbientSpawnPeriod","AreaAddAmbientSpawner","AreaAddDockLocation","AreaAddDockPeriod",
	"AreaAddDocker","AreaAddExtraScene","AreaAddMissionSpawner","AreaAddPedModelIdToSpawnLocation","AreaAddPedTypeToSpawnLocation","AreaAddSpawnLocation","AreaCancelStoredTransition","AreaClearAllExplosions",
	"AreaClearAllPeds","AreaClearAllProjectiles","AreaClearAllVehicles","AreaClearDockers","AreaClearPatrolPaths","AreaClearSpawners","AreaDeactivatePopulationTrigger","AreaDeteriorateAttitudeForPopTriggerPedType",
	"AreaDisableAllPatrolPaths","AreaDisableCameraControlForTransition","AreaDisablePatrolPath","AreaDoorTransitionFix","AreaEnableAllPatrolPaths","AreaEnablePatrolPath","AreaEnsureSpecialEntitiesAreCreated","AreaEnsureSpecialEntitiesAreCreatedWithOverride",
	"AreaForceLoadAreaByAreaTransition","AreaGetPlayerPositionBeforeStore","AreaGetPopulationCullDistance","AreaGetPopulationEvaluatesTriggersIn3D","AreaGetScriptedPOIPointToActivate","AreaGetTransitionTime","AreaGetVisible","AreaInitPatrolPath",
	"AreaIsCollisionLoaded","AreaIsDoorLocked","AreaIsDoorLockedToPeds","AreaIsDoorOpen","AreaIsLoading","AreaLoad","AreaLoadCollision","AreaLoadSpecialEntities",
	"AreaMissionSpawnerExhausted","AreaMissionSpawnerSetActivated","AreaMissionSpawnerSetAttackTarget","AreaMissionSpawnerSetCallback","AreaMissionSpawnerSetExhausted","AreaOverridePopulation","AreaOverridePopulationPedType","AreaPOICompareName",
	"AreaPOIDeactivated","AreaPOIGetActivation","AreaPOIGetFaction","AreaPOIGetGender","AreaPOIGetInterestType","AreaPOIGetMaxNumber","AreaPOIGetPosition","AreaPOISetActivation",
	"AreaPatrolPathShowVisionCones","AreaRegisterAnimProps","AreaRegisterAreaScript","AreaRemoveExtraScene","AreaRemoveSpawner","AreaResetPunishmentAlertLevels","AreaResetPunishmentPedTypes","AreaRevertToDefaultPopulation",
	"AreaSetActivePatrolPathHours","AreaSetAmbientSpawnerExclusive","AreaSetDockerChanceToDock","AreaSetDockerKidReception","AreaSetDockerMinsToRunBeforeEnd","AreaSetDockerPatrolPedReception","AreaSetDockerRunPercentage","AreaSetDockerSexReception",
	"AreaSetDoorLocked","AreaSetDoorLockedToPeds","AreaSetDoorOpen","AreaSetDoorPathableToPeds","AreaSetNodesSwitchedOffInTrigger","AreaSetPathableInRadius","AreaSetPopulationEvaluatesTriggersIn3D","AreaSetPopulationSexGeneration",
	"AreaSetPunishmentAlertLevels","AreaSetPunishmentPedType","AreaSetSavePointLocation","AreaSetTriggerMonitoringRules","AreaSetVisible","AreaSignalAreaTransitionReadyToLoad","AreaSpawnerSetSexGeneration","AreaTransitionDestination",
	"AreaTransitionPoint","AreaTransitionXYZ","AreaTriggerIsValid","AwardAchievement","BarberShopAdd","BarberShopSetGroupName","BarberStoreRegisterFeedbackCallback","BikeAddAttachment",
	"BikeJump","BikeSetPadlock","BlipAddArrow","BlipAddObject","BlipAddPoint","BlipAddSave","BlipAddXYZ","BlipChangeIcon",
	"BlipRemove","BlipRemoveFromChar","BlipSetFlashing","BlipSetMarkerSize","BlipSetShortRanged","BlipSetSize","BlipSetVisionConeAlwaysOn","BlipSetVisionConeCanSee",
	"BulletinSetupMessage","BulletinSetupTexture","ButtonHistoryAddButton","ButtonHistoryAddChargeText","ButtonHistoryAddSequence","ButtonHistoryAddSequenceLocalText","ButtonHistoryAddSequenceTimeInterval","ButtonHistoryAddSequenceTimeIntervalCharge",
	"ButtonHistoryClearLine","ButtonHistoryClearSequence","ButtonHistoryEnableActionTreeInput","ButtonHistoryGetFromHistory","ButtonHistoryIgnoreController","ButtonHistoryIgnoreSequence","ButtonHistorySetCallbackCorrectButton","ButtonHistorySetCallbackFailed",
	"ButtonHistorySetCallbackPassed","ButtonHistorySetNumButtonsDisplayed","ButtonHistorySetSequenceTime","ButtonHistorySetTimeDisplayed","CameraAllowChange","CameraAllowScriptedChange","CameraClearRotationLimit","CameraDebugActive",
	"CameraDefaultFOV","CameraFade","CameraFadeToSplashEnd","CameraFadeToSplashSetup","CameraFadeToSplashStart","CameraFollowEntity","CameraFollowPed","CameraGet169Mode",
	"CameraGetActive","CameraGetFOV","CameraHoldFadeout","CameraIsPointVisible","CameraLookAtObject","CameraLookAtPath","CameraLookAtPathSetSpeed","CameraLookAtPlayer",
	"CameraLookAtXYZ","CameraMgrUpdate","CameraReset","CameraResetToPosition","CameraResetWithDirection","CameraResetWithDirection2","CameraReturnToPlayer","CameraSetActive",
	"CameraSetConvCam","CameraSetConversationPath","CameraSetFOV","CameraSetFieldPoints","CameraSetHeading","CameraSetNearPlane","CameraSetPath","CameraSetPlayerRelativePath",
	"CameraSetRelativePath","CameraSetRotationLimit","CameraSetRotationLimitRel","CameraSetRotationSpeed","CameraSetSecondTarget","CameraSetShot","CameraSetShotOnly","CameraSetSpeed",
	"CameraSetWidescreen","CameraSetXYZ","CanCreateVehicleNearXYZ","CarGetDamageNumber","CarnivalBallTossDecCount","CarnivalBallTossGetCount","CarnivalBallTossIncCount","CarnivalBallTossSetCount",
	"CarnivalDunkTankDecCount","CarnivalDunkTankGetCount","CarnivalDunkTankGetTargetPos","CarnivalDunkTankIncCount","CarnivalDunkTankSetCount","CarnivalDunkTankStartAiming","CarnivalShootAddNumber","CarnivalStrikerMeterGetLevel",
	"CarnivalStrikerMeterIsRunning","CarnivalStrikerMeterSetParams","CarnivalStrikerMeterStart","ChapterGet","ChapterSet","ClassBiologyGetScorePercentage","ClassBiologyInvalidOperation","ClassBiologyIsBadMove",
	"ClassBiologyIsGrossOut","ClassBiologyResetBadMove","ClassBiologyResetGrossOut","ClassBiologySetAnimal","ClassBiologySetGameType","ClassBiologySetScorePercentage","ClassBiologySetTimer","ClassBiologySetTrigFunc",
	"ClassBiologySetWarnTime","ClassBiologySubtractTime","ClassBiologySuccess","ClassBiologyValidOperation","ClassChemAddAction","ClassChemGetActionJustFailed","ClassChemGetActionJustFinished","ClassChemGetActionJustStarted",
	"ClassChemGetLastAction","ClassChemGetPerformance","ClassChemSetActiveActions","ClassChemSetGameType","ClassChemSetPixPerSec","ClassChemSetScrollyOnly","ClassChemSetScrollyVisible","ClassChemSetSpeedScale",
	"ClassChemStartSeq","ClassEnglishGetLastSubmittedWord","ClassEnglishGetLastSubmittedWordLength","ClassEnglishGetScorePercentage","ClassEnglishSetLevel","ClassEnglishSetMinScore","ClassEnglishSetPenaltyTime","ClassEnglishSetScoreMsg",
	"ClassEnglishSetScorePercentage","ClassEnglishSetTimer","ClassEnglishSetTrigFunc","ClassEnglishSetWarnTime","ClassEnglishWordWasDuplicate","ClassEnglishWordWasNaughty","ClassEnglishWordWasNotValid","ClassEnglishWordWasTooShort",
	"ClassEnglishWordWasValid","ClassGeographyGetScorePercentage","ClassGeographyInvalidOperation","ClassGeographySet2Player","ClassGeographySetLevel","ClassGeographySetScoreMsg","ClassGeographySetScorePercentage","ClassGeographySetTimer",
	"ClassGeographySetTrigFunc","ClassGeographySetWarnTime","ClassGeographySubtractTime","ClassGeographySuccess","ClassGeographyValidOperation","ClassMathAnswerGiven","ClassMathBothInvalid","ClassMathFinished",
	"ClassMathGetScore","ClassMathGetScorePercentage","ClassMathInvalidAnswer","ClassMathSetCircles","ClassMathSetDifference","ClassMathSetEquation","ClassMathSetFastest","ClassMathSetFattest",
	"ClassMathSetGameType","ClassMathSetHighest","ClassMathSetLevel","ClassMathSetLowest","ClassMathSetNumQuestions","ClassMathSetScoreMsg","ClassMathSetScorePercentage","ClassMathSetShortest",
	"ClassMathSetSlowest","ClassMathSetSquares","ClassMathSetTallest","ClassMathSetThinnest","ClassMathSetTimer","ClassMathSetTriangles","ClassMathSetTrigFunc","ClassMathSetWarnTime",
	"ClassMathSubtractTime","ClassMathValidAnswer","ClassMusicFeedbackCallback","ClassMusicGetWinner","ClassMusicInstrument","ClassMusicSetPlayers","ClassMusicSetSong","ClassMusicStartSeq",
	"ClearTextQueue","ClockGet","ClockIsPaused","ClockSet","ClockSetEnableMission","ClockSetTickRate","ClothingBackup","ClothingBuildPlayer",
	"ClothingDefineOutfit","ClothingExitButton","ClothingGetPlayer","ClothingGetPlayerOutfit","ClothingGetPlayersHair","ClothingGivePlayer","ClothingGivePlayerOutfit","ClothingIsWearingAnyOutfit",
	"ClothingIsWearingOutfit","ClothingLock","ClothingOverlay","ClothingPlayerOwns","ClothingRemovePlayer","ClothingRestore","ClothingSetPlayer","ClothingSetPlayerOutfit",
	"ClothingSetPlayersHair","ClothingStoreAdd","ClothingStoreLock","ClothingStoreRegisterFeedbackCallback","CollectibleOnMapEnable","CollectiblesGetNumCollectable","CollectiblesGetNumCollected","CollectiblesOnCollectedCallback",
	"CollectiblesSetAllAsCollected","CollectiblesSetTypeAvailable","CompareHashIDs","ConversationMovePeds","CounterClearIcon","CounterClearText","CounterEnableRoll","CounterGetCurrent",
	"CounterGetMax","CounterIncrementCurrent","CounterMakeHUDVisible","CounterSetCurrent","CounterSetIcon","CounterSetMax","CounterSetText","CounterSetTextColour",
	"CounterSetTextXYOffset","CounterUseMeter","CreateNameSpace","CreatePersistentEntity","CreateProjectile","CreateThread","CreditFindText","CreditGetInteger",
	"CreditLoadDB","CreditPrintText","CreditReset","CreditSetup","CreditUnLoadDB","CutSceneSetActionNode","CutSetCutsceneName","CutSetCutsceneTableSize",
	"CutsceneFadeWithCamera","DATInit","DATLoad","DATUnload","DebugAssert","DebugLogMemStats","DebugMemCheck","DebugMenuAddItem",
	"DebugMenuAddPage","DebugPrint","DebugScreenShot","DeleteAllMissionPeds","DeletePersistentEntity","DemoBuildGetSelectedMission","DemoBuildReturnToMain","DestroyProjectile",
	"DetentionMeterSetVisibility","DetonateProjectiles","DisablePOI","DisablePunishmentSystem","DistanceBetweenCoords2d","DistanceBetweenCoords3d","DistanceBetweenPeds2D","DistanceBetweenPeds3D",
	"DoSocialErrands","DockerClearOverrideActiveSetting","DockerSetMaximumRange","DockerSetMinimumRange","DockerSetOverrideActiveSetting","DockerSetUseFacingCheck","DockerSetUseHeightCheck","DodgeballEnableCamera",
	"DodgeballEnableHud","DodgeballEndGame","DodgeballGetWinner","DodgeballHelpMsg","DodgeballInit","DodgeballIsActive","DodgeballPause","DodgeballSetPed",
	"DodgeballStartGame","DodgeballTerm","DoublePedShadowDistance","DumpMemoryHistory","E3DodgeballHackCleanObjects","EffectAddLeavesInArea","EffectAddWindowGlowInArea","EffectBlindedbyMud",
	"EffectCreate","EffectIsRunning","EffectKill","EffectRegisterInArea","EffectSetDirection","EffectSetGymnFireAlpha","EffectSetGymnFireOn","EffectSetNightOnly",
	"EffectSetPosition","EffectSetSphereDirection","EffectSlowKill","EffectTurnOffWindowGlowInArea","EffectTurnOnWindowGlowInArea","EffectUnregisterInArea","EnablePOI","EnterNIS",
	"EntityInteract","ExecuteActionNode","ExitNIS","F_1_02CCompleted","F_2_04_FirstAttempt","F_2_04_NotFirstAttempt","F_2_R03_FirstAttempt","F_2_R03_NotFirstAttempt",
	"F_3_S11_FirstAttempt","F_3_S11_NotFirstAttempt","F_AlarmSound","F_AreaTableAdd","F_AreaTableGetProperty","F_AreaTableGetSize","F_Arrest","F_BikeCheckout",
	"F_Biker","F_Brawl","F_BuildAreaTable","F_BuildCutsceneTable","F_BullyDogs","F_CBarkerGame","F_CBarkerGame2","F_CBarkerHouse",
	"F_CanUseChemistrySet","F_CarnivalWalker","F_Catch","F_Check1_11X2Stage","F_CheckBalloonErrand","F_CheckConditions","F_CheckGymModel","F_CheckMaxItems",
	"F_CheckPOI","F_CheckSleepType","F_Cheerleading","F_ChemForceAvailable","F_ChemForceStart","F_ChemistryWeapons","F_Chemistry_FirstAttempt","F_ChoosePrank",
	"F_ChooseSniperWeapon","F_ClassIsAvailable","F_ClassSmokers","F_CoasterHUDOff","F_CoasterHUDOn","F_CoupleCuddling","F_CoupleKissing","F_CoupleWalking",
	"F_Criminal","F_Crying","F_DebugScenarios","F_DefaultToTrue","F_DefaultTrue","F_DisableBuses","F_DisableJimmyToOfficePA","F_DisplayLockPickingHud",
	"F_DockWorker","F_DogWalker","F_DormAlarmActive","F_DrunkenBeggar","F_DunkMidget","F_EnableJimmyToOfficePA","F_FailedLockPicking","F_FireAlarmActive",
	"F_Fireman","F_GangBeat","F_GetEventFunction","F_GetOpposingFaction","F_GetStudentInArea","F_GrafittiCleanupAvailable","F_GuardDog","F_HCriminal",
	"F_HStudent","F_HasRadioParts","F_HeldAgainstWall","F_Industrial","F_InstantBully","F_IsButtonPressedWithDelayCheck","F_IsSmallKid","F_LaunchingMission",
	"F_LawnmowerAvailable","F_LoadSprayCans","F_LockerStuff","F_LockpickingDoorIsOpen","F_LockpickingRewardPlayer","F_MagicalJasonsByRobertoTransition","F_MakePlayerSafeForNIS","F_MillWorker",
	"F_MissionCompleteModelChanges","F_MissionFactionChanges","F_ObjectIsValid","F_OutsideClass","F_POIManager","F_PedExists","F_PedIsDead","F_PedIsHitByPlayer",
	"F_PedMoveAwayFromXYZ","F_PedSetCameraOffsetXYZ","F_PedSetDropItem","F_PedStoppedLockpicking","F_PickupDice","F_Pirate","F_PlayCutScene","F_PlaySpeechAndWait",
	"F_PlayerBroughtBike","F_PlayerControlFunhouse","F_PlayerDismountBike","F_PlayerExitBike","F_PlayerHasSlept","F_PlayerHasSleptInBed","F_PlayerIsDead","F_PlayerSleptInBed",
	"F_PlayerSleptOnErrand","F_PlayerUsedChemistrySet","F_PreDATInit","F_PrincipalPOI","F_ProcessWakeUpMissionBasedLogic","F_ProjAttack","F_Puker","F_RaceSetCurrent",
	"F_RainBeGone","F_RandomStudent","F_Rats","F_ReachItHumiliation","F_RevengeOnMrBurton","F_RingSchoolBell","F_RollPropDice","F_RoofSniper",
	"F_Russell","F_ScenarioManager","F_SelectBrawlWeapon","F_SelectProjWeapon","F_SetCharacterModelsUnique","F_SetCutsceneName","F_SetCutsceneTableSize","F_SetRestartPoints",
	"F_SetupBeforeMission","F_SetupBeforeMissionThread","F_SetupHallowenPeds","F_SetupLockpickingGame","F_SetupMissionRequirements","F_SmokingFireman","F_SnowShovelAvailable","F_SocialHangout",
	"F_SocialHumiliation","F_StealthSpottedText","F_Straggler","F_Sweep","F_Swirlie","F_TableSize","F_TeacherHarassingKids","F_ToggleArcadeMachines",
	"F_ToggleArcadeScreens","F_TrashStuff","F_Truck","F_UnlockModelChanges","F_UnlockYearbookReward","F_VendettaGreasers","F_VendettaPreppies","F_VendorCheck",
	"F_WallHangout","F_WallSmoking","F_WindowsOpen","F_WorkerHangout","F_WorkerSmoking","F_Workout","F_Wrestling_FirstAttempt","FireCreate",
	"FireDestroy","FireGetHealth","FireSetDamageRadius","FireSetScale","FlushStreamingContents","FollowCamDefaultFightShot","FollowCamDefaultVehicleShot","FollowCamSetFightShot",
	"FollowCamSetVehicleShot","ForceMissionAvailable","ForceStartMission","ForceStartMissionIndex","GameGetPedStat","GameRestarted","GameSetPedStat","GarageAdd",
	"GarageClearAll","GarageHasStoredVehicle","GarageSetIsDeactivated","GarageSetStoredVehicle","GeometryAlpha","GeometryInstance","GetAnchorPosition","GetCurrentDay",
	"GetCurrentNumOfAmbientBikes","GetCutsceneRunning","GetCutsceneTime","GetFactionRespect","GetGeometryFlagState","GetGymModel","GetIsMissionSpecific","GetLanguage",
	"GetMissionAttemptCount","GetMissionCount","GetMissionCurrentAttemptCount","GetMissionCurrentSuccessCount","GetMissionSuccessCount","GetNextShootingGalleryID","GetPointFromPath","GetPointFromPointList",
	"GetPointList","GetPointListSize","GetRequestedSubMPGame","GetSkippedClasses","GetSkippingPunishment","GetStickValue","GetStudent","GetTextQueueSize",
	"GetTimer","GetTotalMissionSuccessCount","GetWeaponLOD","GiveAmmoToPlayer","GiveItemToPlayer","GiveWeaponToPlayer","GlobalImportScript","HUDClearAllElements",
	"HUDComponentGetFlashing","HUDComponentGetLocked","HUDComponentGetVisibility","HUDDiaryVisible","HUDFlashAllObjectiveBlips","HUDInventoryDisplayChange","HUDPhotographySetColourUpgrade","HUDPhotographySetSaveLevel1",
	"HUDPhotographySetSaveLevel2","HUDRestoreVisibility","HUDSaveVisibility","HUDSetEnableInputIgnoredDisplay","HUDSetFightStyle","HUDSetNumFortuneTellerKeys","HUDSetNumGlobeKeys","HasAnimGroupLoaded",
	"HasBallTouchedSocketRadius","HasStoryModeBeenSelected","HideGeneralHealthBar","ImportScript","IsActionTreeLoaded","IsButtonBeingPressed","IsButtonBeingReleased","IsButtonPressed",
	"IsCutsceneLoaded","IsDemoBuildEnabled","IsInTitleMenu","IsItemAWeapon","IsMissionAvailable","IsMissionCompleated","IsMissionDebugFailure","IsMissionDebugSuccess",
	"IsMissionFromDebug","IsMissionFromRestart","IsMissionRestartable","IsMissionSimpleFade","IsPathDone","IsStreamingBusy","IsValidYearbookPhotoOfPed","ItemGetCurrentNum",
	"ItemSetCurrentNum","KillNameSpace","L_CutsceneFade","L_CutsceneSpecialInit","L_CutsceneSpecialShutdown","LaunchScenarioScript","LaunchScript","LawnMowingGetPercent",
	"LawnMowingSetLawnArea","LawnMowingSetLawnAreaP2","LawnMowingSetMinScore","LawnMowingSetP2","LawnMowingSetTimer","Load","LoadActionTree","LoadAnimationGroup",
	"LoadCutscene","LoadCutsceneSound","LoadFontStyle","LoadModels","LoadPAnims","LoadPedModels","LoadPedPOIModel","LoadPedPOIModels",
	"LoadVehicleModels","LoadVehiclePOIModel","LoadWeaponModels","LoadWeaponPOIModel","LockFPS30","LogLoad","MGArcadeStart","MGArcade_Cos",
	"MGArcade_CreateLayer","MGArcade_DrawText","MGArcade_GetDialogActive","MGArcade_GetDistanceBetweenSprites","MGArcade_GetOrientationBetweenSprites","MGArcade_GetSoundID","MGArcade_GetTextureID","MGArcade_InitScreen",
	"MGArcade_Layer_AddSprite","MGArcade_Layer_SetCol","MGArcade_Layer_SetOffset","MGArcade_Layer_SetPos","MGArcade_Layer_SetScale","MGArcade_Layer_SetTexture","MGArcade_LoadSounds","MGArcade_LoadTextures",
	"MGArcade_SetCancelConfirm","MGArcade_SetFont","MGArcade_SetRasteryEffect","MGArcade_Sin","MGArcade_Sprite_AddTextParam","MGArcade_Sprite_GetPos","MGArcade_Sprite_GetRot","MGArcade_Sprite_GetRotSpeed",
	"MGArcade_Sprite_GetScale","MGArcade_Sprite_GetScaleSpeed","MGArcade_Sprite_GetTexture","MGArcade_Sprite_GetVel","MGArcade_Sprite_SetAcc","MGArcade_Sprite_SetAdditive","MGArcade_Sprite_SetCol","MGArcade_Sprite_SetCollFunc",
	"MGArcade_Sprite_SetCollSize","MGArcade_Sprite_SetFlip","MGArcade_Sprite_SetFont","MGArcade_Sprite_SetOffset","MGArcade_Sprite_SetPos","MGArcade_Sprite_SetRot","MGArcade_Sprite_SetRotAcc","MGArcade_Sprite_SetRotSpeed",
	"MGArcade_Sprite_SetScale","MGArcade_Sprite_SetScaleSpeed","MGArcade_Sprite_SetSize","MGArcade_Sprite_SetText","MGArcade_Sprite_SetTextParam","MGArcade_Sprite_SetTextToScoreName","MGArcade_Sprite_SetTexture","MGArcade_Sprite_SetUpdateFunc",
	"MGArcade_Sprite_SetVel","MGArcade_Sprite_SetVisible","MGArcade_Sqrt","MGArcade_StartIntro","MGArcade_Tan","MGCA_GetFailureCode","MGCA_GetLives","MGCA_PreInstanceEnemy",
	"MGCA_PreInstancePowerUp","MGCA_SetCompletionThreshold","MGCA_SetDeckResolution","MGCA_SetEnemyCompletionSpawnThreshold","MGCA_SetEnemyInitialPeriod","MGCA_SetEnemyInstanceMax","MGCA_SetEnemyPeriod","MGCA_SetEnemySpeed",
	"MGCA_SetEnemyTotalMax","MGCA_SetExploderDebrisCount","MGCA_SetExploderDebrisSpeed","MGCA_SetExploderTimeOut","MGCA_SetLevelTimeout","MGCA_SetLives","MGCA_SetLocaleStringKey","MGCA_SetPathSpeedupFactor",
	"MGCA_SetPlayerSpeed","MGCA_SetPowerUpCompletionSpawnThreshold","MGCA_SetPowerUpDuration","MGCA_SetPowerUpFreezeFactor","MGCA_SetPowerUpInitialPeriod","MGCA_SetPowerUpInstanceMax","MGCA_SetPowerUpPeriod","MGCA_SetPowerUpSpeed",
	"MGCA_SetPowerUpSpeedBoostFactor","MGCA_SetPowerUpTotalMax","MGCA_SetSetPowerUpClearRadius","MGCA_SetTextureBank","MGDartsGetTargetPoints","MGDartsGetTargetPos","MGDartsIsAiming","MGDartsRemoveProjectiles",
	"MGDartsSetDart","MGDartsSetGame","MGDartsSetPoints","MGDartsStartAiming","MGDartsStopAiming","MGKeepUpsAddAction","MGKeepUpsGetLastAction","MGKeepUpsSetFuncs",
	"MGKeepUpsSetSpeedScale","MGKeepUpsStartSeq","MGLockSetCombo","ManagedPlayerSetPosPoint","ManagedPlayerSetPosXYZ","MiniObjectiveGetIsComplete","MiniObjectiveOnCompletedCallback","MiniObjectiveSetIsComplete",
	"Minigame2POutro","MinigameAddCompletionMsg","MinigameCreate","MinigameDestroy","MinigameEnableHUD","MinigameEnd","MinigameGetErrandCompletion","MinigameGetHighScore",
	"MinigameHasTopScore","MinigameHoldCompletion","MinigameIsActive","MinigameIsFadingCompletion","MinigameIsHighScore","MinigameIsReady","MinigameIsShowingCompletion","MinigameIsShowingGrades",
	"MinigameIsSuccess","MinigameReleaseCompletion","MinigameSetAnnouncement","MinigameSetChapterCompletion","MinigameSetCompletion","MinigameSetElapsedGameTime","MinigameSetErrandCompletion","MinigameSetGrades",
	"MinigameSetHighScoreFromASCII","MinigameSetHighScoreFromID","MinigameSetPlayerNumber","MinigameSetUberCompletion","MinigameStart","MissionActive","MissionActiveSpecific","MissionActiveSpecific2",
	"MissionAllowAmbientTransitions","MissionAllowConcurrentMissions","MissionAskUserToStart","MissionAttemptCountInc","MissionClearDisablePedTypes","MissionDisablePedType","MissionDontFadeIn","MissionDontFadeInAfterCompetion",
	"MissionFail","MissionForceCompleted","MissionGetCurrentName","MissionGetIndex","MissionGetName","MissionGetUserStartResponse","MissionInClass","MissionObjectiveAdd",
	"MissionObjectiveComplete","MissionObjectiveReminderTime","MissionObjectiveRemove","MissionObjectiveUpdateParam","MissionOverrideArrestPoint","MissionOverrideKOPoint","MissionPlayActionNode","MissionResetRespawnOverrides",
	"MissionSetAutoRestart","MissionSetCompletedCount","MissionStartNextClass","MissionStopActionController","MissionSucceed","MissionSuccessCountInc","MissionSurpressMissionNameText","MissionTimerGetTimeRemaining",
	"MissionTimerHasFinished","MissionTimerPause","MissionTimerStart","MissionTimerStartFixed","MissionTimerStop","MissionUpdateActionController","ModelInfoPrintStats","ModelInfoResetStats",
	"ModelNotNeeded","ModelNotNeededAmbient","MonitorSetGreyed","MonitorSetText","MusicAllowPlayDuringCutscenes","MusicFadeWithCamera","NSCall","NS_ON",
	"NewspaperAddDeliverdPaper","NewspaperGetMaxPapers","NewspaperGetNumDeliveredPapers","NewspaperMakeHUDVisible","NewspaperSetDeliveredPapers","NewspaperSetMaxPapers","NewspaperSetPaperVisible","NewspaperThrowPaper",
	"NonMissionPedGenerationDisable","NonMissionPedGenerationEnable","NormalizedTimeOverride","NormalizedTimeOverrideSet","ObjTimerSetText","ObjectBreak","ObjectCreatePoint","ObjectCreateXYZ",
	"ObjectDelete","ObjectDontCleanup","ObjectFindInArea","ObjectGetModelIndex","ObjectHashIDToPoolIndex","ObjectIsDestroyed","ObjectIsInAreaObject","ObjectIsInAreaXYZ",
	"ObjectIsModel","ObjectMakeTargetable","ObjectNameToHashID","ObjectNumProjectileImpacts","ObjectPedNoTarget","ObjectRemovePickupsInTrigger","ObjectToggleVulnerability","ObjectTypeIsInTrigger",
	"ObjectTypeSetPickupListOverride","PAnimApplyDamage","PAnimAreaProps","PAnimBreakLight","PAnimClearWhenDoneRotation","PAnimCloseDoor","PAnimCreate","PAnimCreateSGTarget",
	"PAnimDelete","PAnimDestroyedByPed","PAnimDoorStayOpen","PAnimEnableStreaming","PAnimExists","PAnimFollowPath","PAnimFollowPathReset","PAnimFollowPathSoundLoop",
	"PAnimForceCreate","PAnimForceDelete","PAnimGetHealth","PAnimGetPathFollowSpeed","PAnimGetPoolIndex","PAnimGetPosition","PAnimGetPropFlag","PAnimGetSocketXYZ",
	"PAnimHideHealthBar","PAnimIsDestroyed","PAnimIsOpen","PAnimIsPlaying","PAnimIsPlayingNode","PAnimIsUsed","PAnimMakeTargetable","PAnimMakeVisuallyTargetable",
	"PAnimModelNeeded","PAnimNumDestroyed","PAnimOpenDoor","PAnimOpenDoorImmediate","PAnimOpenDoors","PAnimOverrideDamage","PAnimOverrideMinDamage","PAnimRequest",
	"PAnimReset","PAnimResetAllDamageable","PAnimRotate","PAnimSetActionNode","PAnimSetAlpha","PAnimSetInvulnerable","PAnimSetInvulnerableToPlayer","PAnimSetPathFollowSpeed",
	"PAnimSetPropFlag","PAnimSetPulsateLight","PAnimShowHealthBar","PAnimStopFollowPath","PAnimTypeSetPickupListOverride","POIActionNode2","POIClearForPeds","POIGetPosXYZ",
	"POIGroupsEnabled","POIIsValid","POISetDisablePedProduction","POISetScriptedPedExitObjective","POISetSystemEnabled","PathGetLastNode","PauseGameClock","PauseSimulation",
	"PedActionControllerUpdate","PedAddBroadcastStimulus","PedAddCover","PedAddPedToIgnoreList","PedAllowCollisionResponse","PedAlwaysUpdateAnimation","PedApplyDamage","PedAreaClearOfPedsInXYZ",
	"PedAttachEffect","PedAttack","PedAttackCar","PedAttackNearestCar","PedAttackPlayer","PedAttackProp","PedAttackPropOffset","PedAutoCover",
	"PedBikeBrawl","PedCanSeeObject","PedCanTeleportOnAreaTransition","PedCharacterTrigger","PedCharacterTriggerDelete","PedClearAllWeapons","PedClearAntiTether","PedClearFocus",
	"PedClearGuard","PedClearHasAggressed","PedClearHitRecord","PedClearObjective","PedClearObjectives","PedClearPOI","PedClearPOIForAllPeds","PedClearTether",
	"PedClearWeapon","PedClimbLadder","PedClimbWall","PedCoverSet","PedCoverSetFromProfile","PedCoverSetOnCoverCallback","PedCreatePOIPoint","PedCreatePoint",
	"PedCreatePointWithAdjustedHeading","PedCreateStimulus","PedCreateXYZ","PedDelete","PedDeleteWeaponInventorySnapshot","PedDestroyWeapon","PedDetachAndKillEffect","PedDisableMoveOutOfWay",
	"PedDismissAllAllies","PedDismissAlly","PedDontCleanup","PedEnableGiftRequirement","PedEnterVehicle","PedExitVehicle","PedFaceHeading","PedFaceObject",
	"PedFaceObjectNow","PedFaceXYZ","PedFindAmbientPedOfModelID","PedFindInAreaObject","PedFindInAreaXYZ","PedFindRandomPed","PedFindRandomSpawnPosition","PedFlee",
	"PedFleeOnBikeGetNextNode","PedFleeOnPathOnBike","PedFleeOnRoadOnBike","PedFollowFocus","PedFollowObject","PedFollowPath","PedFreeFromTrigger","PedGetAllyFollower",
	"PedGetAllyLeader","PedGetAmmoCount","PedGetDamageGivenMultiplier","PedGetDamageTakenMultiplier","PedGetEmotionTowardsPed","PedGetFaction","PedGetFlag","PedGetGrappleTargetPed",
	"PedGetHeadPos","PedGetHeading","PedGetHealth","PedGetHitRecordDamage","PedGetImmortalFlag","PedGetLastHitWeapon","PedGetLastVehicle","PedGetMaxHealth",
	"PedGetMoney","PedGetName","PedGetNameHashID","PedGetNodeTime","PedGetOffsetInWorldCoords","PedGetPedCountWithModel","PedGetPedToTypeAttitude","PedGetPosXYZ",
	"PedGetRandomModelId","PedGetScenarioObjFlag","PedGetSpecial","PedGetTargetPed","PedGetTypeToTypeAttitude","PedGetUniqueModelStatus","PedGetVehicleWhoHitMeLast","PedGetWeapon",
	"PedGetWhoHitMeLast","PedGuardPed","PedHasAggressed","PedHasAlly","PedHasAllyFollower","PedHasAllyLeader","PedHasGeneratedStimulusOfType","PedHasJustKilledPedOfType",
	"PedHasPOI","PedHasReceivedGift","PedHasWeapon","PedHideHealthBar","PedIgnoreAttackCone","PedIgnoreAttacks","PedIgnoreStimuli","PedInConversation",
	"PedInRectangle","PedIsAlerted","PedIsAnimFlagSet","PedIsCurrentAnim","PedIsDead","PedIsDoingTask","PedIsFacingObject","PedIsFacingXYZ",
	"PedIsFemale","PedIsHit","PedIsInAnyVehicle","PedIsInAreaObject","PedIsInAreaXYZ","PedIsInCombat","PedIsInTrigger","PedIsInVehicle",
	"PedIsModel","PedIsOnScreen","PedIsOnVehicle","PedIsPedInBox","PedIsPlayer","PedIsPlaying","PedIsPropAttached","PedIsSocializing",
	"PedIsSpotted","PedIsStandingOnVehicle","PedIsTargetable","PedIsUsingProp","PedIsValid","PedIsWantingToSocialize","PedJoinCombatZone","PedJump",
	"PedLeaveCombatZone","PedLockTarget","PedMakeAmbient","PedMakeAmbientKeepResources","PedMakeMissionChar","PedMakeTargetable","PedMePlaying","PedModelCreateGiftRequirement",
	"PedModelNotNeededAmbient","PedMoveToObject","PedMoveToPoint","PedMoveToXYZ","PedOnBikePathSmoothing","PedOverrideActionTreeReference","PedOverrideSocialResponseToStimulus","PedOverrideStat",
	"PedPassBall","PedPathNodeReachedDistance","PedPickup","PedPlayCatch","PedPlayHitReaction","PedPutOnBike","PedReceiveBall","PedRecruitAlly",
	"PedRegisterSocialCallback","PedRemoveBroadcastStimulus","PedRemoveCurrentObjective","PedRemovePedFromIgnoreList","PedRemoveStimulus","PedRequestModel","PedResetAttitudes","PedResetTypeAttitudesToDefault",
	"PedRestoreNumCombatants","PedRestoreWeaponInventorySnapshot","PedRestrictToTrigger","PedResumePath","PedRooftopAttacker","PedSaveWeaponInventorySnapshot","PedSetAIButes","PedSetAITree",
	"PedSetActionNode","PedSetActionTree","PedSetAllyAutoEngage","PedSetAllyBehaviour","PedSetAllyJump","PedSetAlpha","PedSetAlwaysStrafe","PedSetAnim",
	"PedSetAntiTetherToPed","PedSetAntiTetherToPoint","PedSetAntiTetherToProp","PedSetAntiTetherToTrigger","PedSetAntiTetherToXYZ","PedSetAsleep","PedSetCheap","PedSetCheering",
	"PedSetCombatZoneMask","PedSetControllerID","PedSetDamageGivenMultiplier","PedSetDamageTakenMultiplier","PedSetDefaultTypeToTypeAttitude","PedSetEffectedByGravity","PedSetEmotionTowardsPed","PedSetEntityFlag",
	"PedSetFaction","PedSetFightingSystem","PedSetFlag","PedSetFocus","PedSetGlobalAttitude_IgnoreTruants","PedSetGlobalAttitude_Rumble","PedSetGlobalSleep","PedSetGrappleTarget",
	"PedSetHealth","PedSetHealthBarQuiet","PedSetHitRecordDamage","PedSetImmortalFlag","PedSetInfiniteSprint","PedSetInvulnerable","PedSetInvulnerableToPlayer","PedSetIsStealthMissionPed",
	"PedSetMaxHealth","PedSetMinEngage","PedSetMinHealth","PedSetMissionCritical","PedSetMoney","PedSetNoDamageNextFall","PedSetNumCombatants","PedSetObjectiveRemovedCallback",
	"PedSetPOI","PedSetPedToTypeAttitude","PedSetPosPoint","PedSetPosXYZ","PedSetProjDest","PedSetProjectileLifetime","PedSetPunishmentPoints","PedSetRemoveOwnedProj",
	"PedSetRequiredGift","PedSetScenarioObjFlag","PedSetSeasonalModels","PedSetSocialSubtitlesEnable","PedSetSpecial","PedSetSpecialRate","PedSetStationary","PedSetStatsType",
	"PedSetStealthBehavior","PedSetStealthVisionHeight","PedSetTaskNode","PedSetTetherMoveToCenter","PedSetTetherMoveToTarget","PedSetTetherSpeed","PedSetTetherToPed","PedSetTetherToPoint",
	"PedSetTetherToProp","PedSetTetherToTrigger","PedSetTetherToXYZ","PedSetTypeToTypeAttitude","PedSetUniqueModelStatus","PedSetUsesCollisionScripted","PedSetWantsToSocializeWithPed","PedSetWeapon",
	"PedSetWeaponFlag","PedSetWeaponNow","PedSetWorldAnchor","PedShowHealthBar","PedShowHealthBarInFPmode","PedSocialKeepAlive","PedSocialOverrideLoad","PedSpawnRandomPed",
	"PedStartConversation","PedStop","PedStopSocializing","PedSwapModel","PedTargetPAnim","PedTargetVehicle","PedUseProp","PedUseSocialOverride",
	"PedWander","PedWarpIntoCar","PedWarpOutOfCar","PhotoGetEntityNext","PhotoGetEntityStart","PhotoHasBeenTaken","PhotoIsSetValid","PhotoSetValid",
	"PhotoShowExitString","PhotoTargetInFrame","PickupCreateFromPed","PickupCreatePoint","PickupCreateXYZ","PickupDelete","PickupDestroyTypeInAreaXYZ","PickupFindInArea",
	"PickupGetXYZ","PickupIsInAreaXYZ","PickupIsPickedUp","PickupMakeTargetable","PickupRemoveAll","PickupRequestModel","PickupSetIgnoreRespawnDistance","PlayCutSceneForCheat",
	"PlayCutSceneForCheatThread","PlayCutsceneWithLoad","PlayerActivateCombatSphere","PlayerAddMoney","PlayerChangePhysicalState","PlayerClearLastVehicle","PlayerClearRewardStore","PlayerCreateXYZ",
	"PlayerDetachFromVehicle","PlayerDismountBike","PlayerDoneLoading","PlayerFaceHeading","PlayerFaceHeadingNow","PlayerFellAsleep","PlayerFixToBackOfVehicle","PlayerGetBikeId",
	"PlayerGetHealth","PlayerGetLastBikeId","PlayerGetMoney","PlayerGetNumTimesBusted","PlayerGetNumberOfItemsAllowed","PlayerGetPedIndex","PlayerGetPhysicalState","PlayerGetPosXYZ",
	"PlayerGetPunishmentPoints","PlayerGetScriptSavedData","PlayerHasItem","PlayerHasSpace","PlayerHasUnlockedUpgrade","PlayerHasWeapon","PlayerIgnoreTargeting","PlayerIncPunishmentPoints",
	"PlayerIsInAnyVehicle","PlayerIsInAreaObject","PlayerIsInAreaXYZ","PlayerIsInStealthProp","PlayerIsInTrigger","PlayerIsInVehicle","PlayerKilled","PlayerLockButtonInputsExcept",
	"PlayerPutOnBike","PlayerRecordAttackTime","PlayerRefreshPhysicalState","PlayerRegisterSocialCallbackVsPed","PlayerResetPhysicalState","PlayerScalePunishmentPoints","PlayerSetClassSkipCount","PlayerSetControl",
	"PlayerSetEnableFirstPerson","PlayerSetGrade","PlayerSetHealth","PlayerSetHighRisk","PlayerSetInvulnerable","PlayerSetMinPunishmentPoints","PlayerSetMoney","PlayerSetPosPoint",
	"PlayerSetPosPointArea","PlayerSetPosSimple","PlayerSetPosXYZ","PlayerSetPosXYZArea","PlayerSetPunishmentPoints","PlayerSetScriptSavedData","PlayerSetTakeDamageWhenAttachedToVehicle","PlayerSetWeapon",
	"PlayerSocialDisableActionAgainstPed","PlayerSocialEnableOverrideAgainstPed","PlayerSocialOverrideLoad","PlayerStopAllActionControllers","PlayerSuppressFailDisplayOnDeath","PlayerSwapModel","PlayerUnequip","PlayerUnlockUpgrade",
	"PlayerWeaponHudLock","PunishersRespondToPlayerOnly","QueueSoundSpeech","QueueText","QueueTextString","RaceAddBarrier","RaceAddBoostPoint","RaceAddJumpNode",
	"RaceAddJumpPath","RaceAddNodeToBottleneck","RaceAddNodeToHighlight","RaceAddRacer","RaceAddShortcutPath","RaceCleanUpRace","RaceClearResults","RaceDestroyTransition",
	"RaceDisplayTransition","RaceGetDuration","RaceGetIdOfRacerInPosition","RaceGetPositionInRaceOfRacer","RaceGetRacerLapNum","RaceGetRacerRaceTime","RaceHUDVisible","RaceHasFinished",
	"RaceHasRacerFinished","RaceIsTransitionDisplayed","RaceOverridePlayerPos","RaceRemoveRacer","RaceSetArcade","RaceSetRacerStats","RaceSetupRace","RaceShowFinishPointOnly",
	"RaceStartRace","RadarBusBlipSetVisible","RadarHidePlayerBlip","RadarLockOnFloor","RadarLockOnPoint","RadarReleaseLock","RadarRestoreMinMax","RadarSetIndoorRange",
	"RadarSetMinMax","RadarSetVisibility","RandomElement11","RandomElement13","RandomElement14","RandomElement2","RandomElement3","RandomElement4",
	"RandomElement5","RandomElement6","RandomElement7","RandomElement8","RandomIndex","RandomTableElement","ReadyToLoad","RegisterAsGirlfriend",
	"RegisterCallbackOnBusted","RegisterCallbackOnYearbookPhoto","RegisterGlobalEventHandler","RegisterHashEventHandler","RegisterPedEventHandler","RegisterPropEventHandler","RegisterTriggerEventHandler","RemoveArrestRestartPoint",
	"RemoveKORestartPoint","RemovePlayerItem","RequestActionTree","RequestAnimGroup","RequestModel","ResetGiftRequirements","ResetYearbookPhotos","ResolveActionTreeReferences",
	"ReturnFromMPGame","SetAmbientPedsIgnoreStimuli","SetArrestRestartPointCameraPos","SetAsleepRestartPointCameraPos","SetBBallCollisionCallback","SetClipRange","SetCurrentDay","SetDefaultArrestPoint",
	"SetDefaultArrestRestartCameraPos","SetDefaultAsleepPoint","SetDefaultAsleepRestartCameraPos","SetDefaultKOPoint","SetDefaultKORestartCameraPos","SetFactionRespect","SetGeneralHealthBar","SetKORestartPointCameraPos",
	"SetMissionSuccessCount","SetNumberOfHandledHashEventObjects","SetNumberOfHandledPedEventObjects","SetNumberOfHandledPropEventObjects","SetNumberOfHandledTriggerEventObjects","SetPlayer1Win","SetPlayer2Win","SetPopulationFastCulling",
	"SetScreenFadeValue","SetSkippedClass","SetWeaponLOD","SetupPedObject","ShopAddItem","ShopEnd","ShopGetClerkID","ShopIsActive",
	"ShopSetCameraAngleOffset","ShopSetCameraPos","ShopSetCameraZoomPercentage","ShopSetConversationTree","ShopSetIsPlayerInShop","ShopSetOnStopShoppingCB","ShopSetPlayerPos","ShopSetShopKeepInfo",
	"ShopStart","ShouldEventInitiate","ShowGeneralHealthBar","SoccerPAllowAim","SoccerPGetHitPos","SoccerPGetHitTarget","SoccerPSetBallsToKick","SoccerPSetGoalArea",
	"SoccerPSetHealthBarPosition","SoccerPSetMeterSpeed","SoccerPSetPed","SoccerPSetPedsHealthBar","SoccerPSetProjectile","SoccerPSetTarget","SoccerPSetTargetCount","SoccerPStartAiming",
	"SoccerPStopAiming","SoundAddSpeechPriorityFilter","SoundBoxingCrowdSoundKill","SoundBoxingCrowdSoundPlayBoo","SoundBoxingCrowdSoundPlayCheer","SoundBoxingCrowdSoundSetExcitementLevel","SoundBoxingCrowdSoundStart","SoundCancelConversation",
	"SoundClearScriptedAmbience","SoundClearSpeechFilter","SoundContinue","SoundDisableSpeech","SoundDisableSpeech_ActionTree","SoundEmitterEnable","SoundEmitterStart","SoundEmitterStop",
	"SoundEnableInteractiveMusic","SoundEnableSpeech","SoundEnableSpeech_ActionTree","SoundFadeWithCamera","SoundFadeoutAmbience","SoundFadeoutStream","SoundInitScreamer","SoundIsPreloadReady",
	"SoundIsSpeechPreloaded","SoundLoadBank","SoundLoopPlay2D","SoundLoopPlay3D","SoundLoopPlayOnPed","SoundLoopPlayOnProp","SoundLoopStop3D","SoundMakeEverythingCloser",
	"SoundMusicJimmyComeToTheOfficePA","SoundPause","SoundPlay2D","SoundPlay3D","SoundPlay3DIgnoreFade","SoundPlayAmbience","SoundPlayAmbientSpeechEvent","SoundPlayInteractiveStream",
	"SoundPlayInteractiveStreamLocked","SoundPlayMissionEndMusic","SoundPlayPreloadedSpeech","SoundPlayPreloadedStream","SoundPlayScriptedSpeechEvent","SoundPlayScriptedSpeechEventWrapper","SoundPlayScriptedSpeechEvent_2D","SoundPlayStream",
	"SoundPlayStreamNoLoop","SoundPreloadSpeech","SoundPreloadStream","SoundPreloadStreamNoLoop","SoundRemoveAllQueuedSpeech","SoundRemoveSpeechPriorityFilter","SoundRestartAmbiences","SoundRestartPA",
	"SoundSetAudioFocusCamera","SoundSetAudioFocusPlayer","SoundSetCurrentGoKartRace","SoundSetHighIntensityStream","SoundSetMidIntensityStream","SoundSetScriptedAmbience","SoundSetSpeechConversation","SoundSetSpeechPriorityFilter",
	"SoundSpeechPlaying","SoundStartFireAlarm","SoundStopAmbiences","SoundStopCurrentSpeechEvent","SoundStopFireAlarm","SoundStopInteractiveStream","SoundStopPA","SoundStopStream",
	"SoundUnLoadBank","SpawnerClearOverrideActiveSetting","SpawnerSetActiveWithinRadius","SpawnerSetOverrideActiveSetting","SplashScreenDisable","SplashScreenDisplay","StartCutscene","StartMission",
	"StartVibration","StatAddToFloat","StatAddToInt","StatGetAsFloat","StatGetAsInt","StatGetGameCompletion","StatGetNumLayoutItems","StatGetPrincipalDiffAsFloat",
	"StatGetPrincipalDiffAsInt","StatLayoutAddGroup","StatLayoutAddHeading","StatLayoutAddStat","StatResetAll","StatSetAsFloat","StatSetAsInt","StatSetIsTrackingEnabled",
	"StatUpdatePrincipalStats","StopAmbientPedAttacks","StopCutscene","StopPedProduction","StopVibration","StreamedScriptHasLoaded","StreamedScriptLaunch","StreamedScriptRemove",
	"StreamedScriptRequest","StreamedScriptTerminate","StruggleButtonSetButton","StruggleButtonSetDisplay","StruggleButtonSetText","SystemAllowMissionManagerToForceRunMissions","SystemBustedAreaTransitionHandled","SystemEnableFrontEndAndSelectScreens",
	"SystemGetSavedPositionInformation","SystemIsReady","SystemMarkCollisionForExclusion","SystemResetShouldMovePlayer","SystemShouldEndScript","SystemShouldMovePlayer","T_ChristmasdLogic","T_ExpelledLogic",
	"TaggingOnlyShowMissionTags","TaggingPedHasJustFinished","TaggingSetTVsState","TaggingStartPersistentTag","TaggingStopPersistentTag","TattooStoreAdd","TattooStoreRegisterFeedbackCallback","TerminateCurrentScript",
	"TerminateThread","TextAddNonLocalizedString","TextAddParamNum","TextAddParamString","TextClear","TextPrint","TextPrintBig","TextPrintF",
	"TextPrintString","ThreadNameSpace","ThreadYield","ToggleHUDComponentFlashing","ToggleHUDComponentLocked","ToggleHUDComponentVisibility","TutorialMessage","TutorialRemoveMessage",
	"TutorialShowMessage","TutorialStart","TutorialStop","UnLoadAnimationGroup","UnLoadBranch","UnloadFontStyle","UnloadModels","UnlockYearbookPicture",
	"UnpauseGameClock","UnpauseSimulation","UpdateAsylum","UpdateTextQueue","VehicleBikeForceBoundingSphereUpdate","VehicleBikeGeneratorToggle","VehicleCreateCarGenerator","VehicleCreatePoint",
	"VehicleCreateXYZ","VehicleDelete","VehicleDontCleanup","VehicleEnableEngine","VehicleEnableSiren","VehicleFaceHeading","VehicleFindInAreaXYZ","VehicleFindRandomSpawnPosition",
	"VehicleFollowEntity","VehicleFollowPath","VehicleFromDriver","VehicleGetHealth","VehicleGetModelId","VehicleGetPosXYZ","VehicleIsInAreaXYZ","VehicleIsInTrigger",
	"VehicleIsModel","VehicleIsValid","VehicleMakeAmbient","VehicleModelNotNeededAmbient","VehicleMoveToXYZ","VehicleOverrideAmbient","VehicleOverrideAmbientCruiseSpeed","VehicleRequestModel",
	"VehicleRevertToDefaultAmbient","VehicleSetAccelerationMult","VehicleSetColor","VehicleSetColours","VehicleSetCruiseSpeed","VehicleSetDrivingMode","VehicleSetEntityFlag","VehicleSetMission",
	"VehicleSetNISSafe","VehicleSetOwner","VehicleSetPosPoint","VehicleSetPosXYZ","VehicleSetStatic","VehicleSetStatus","VehicleSirenAllwaysOn","VehicleStop",
	"Wait","WaitAreaDATLoad","WaitInterruptible","WaitSkippable","WeaponEquipped","WeaponGetType","WeaponRequestModel","WeaponSetRangeMultiplier",
	"WeatherForceSnow","WeatherGet","WeatherRelease","WeatherSet","YearbookIsFull","_ALERT","__onerror","bsDumpMemUsage","bsDumpRunTimeMetrics","bsMarkCheckPoint","bsWait","dbg_print","print","printfor"
];
var list_of_lua_functions = [
	"AreaTransitionPoint","AreaTransitionXYZ","ClearTextQueue","DisablePOI","DistanceBetweenPeds2D","DistanceBetweenPeds3D","EnablePOI","EntityInteract",
	"ExecuteActionNode","F_1_02CCompleted","F_2_04_FirstAttempt","F_2_04_NotFirstAttempt","F_2_R03_FirstAttempt","F_2_R03_NotFirstAttempt","F_3_S11_FirstAttempt","F_3_S11_NotFirstAttempt",
	"F_AlarmSound","F_AreaTableAdd","F_AreaTableGetProperty","F_AreaTableGetSize","F_Arrest","F_BikeCheckout","F_Biker","F_Brawl",
	"F_BuildAreaTable","F_BuildCutsceneTable","F_BullyDogs","F_CBarkerGame","F_CBarkerGame2","F_CBarkerHouse","F_CanUseChemistrySet","F_CarnivalWalker",
	"F_Catch","F_Check1_11X2Stage","F_CheckBalloonErrand","F_CheckConditions","F_CheckGymModel","F_CheckMaxItems","F_CheckPOI","F_CheckSleepType",
	"F_Cheerleading","F_ChemForceAvailable","F_ChemForceStart","F_ChemistryWeapons","F_Chemistry_FirstAttempt","F_ChoosePrank","F_ChooseSniperWeapon","F_ClassIsAvailable",
	"F_ClassSmokers","F_CoasterHUDOff","F_CoasterHUDOn","F_CoupleCuddling","F_CoupleKissing","F_CoupleWalking","F_Criminal","F_Crying",
	"F_DebugScenarios","F_DefaultToTrue","F_DefaultTrue","F_DisableBuses","F_DisableJimmyToOfficePA","F_DisplayLockPickingHud","F_DockWorker","F_DogWalker",
	"F_DormAlarmActive","F_DrunkenBeggar","F_DunkMidget","F_EnableJimmyToOfficePA","F_FailedLockPicking","F_FireAlarmActive","F_Fireman","F_GangBeat",
	"F_GetEventFunction","F_GetOpposingFaction","F_GetStudentInArea","F_GrafittiCleanupAvailable","F_GuardDog","F_HCriminal","F_HStudent","F_HasRadioParts",
	"F_HeldAgainstWall","F_Industrial","F_InstantBully","F_IsButtonPressedWithDelayCheck","F_IsSmallKid","F_LaunchingMission","F_LawnmowerAvailable","F_LoadSprayCans",
	"F_LockerStuff","F_LockpickingDoorIsOpen","F_LockpickingRewardPlayer","F_MagicalJasonsByRobertoTransition","F_MakePlayerSafeForNIS","F_MillWorker","F_MissionCompleteModelChanges","F_MissionFactionChanges",
	"F_ObjectIsValid","F_OutsideClass","F_POIManager","F_PedExists","F_PedIsDead","F_PedIsHitByPlayer","F_PedMoveAwayFromXYZ","F_PedSetCameraOffsetXYZ",
	"F_PedSetDropItem","F_PedStoppedLockpicking","F_PickupDice","F_Pirate","F_PlayCutScene","F_PlaySpeechAndWait","F_PlayerBroughtBike","F_PlayerControlFunhouse",
	"F_PlayerDismountBike","F_PlayerExitBike","F_PlayerHasSlept","F_PlayerHasSleptInBed","F_PlayerIsDead","F_PlayerSleptInBed","F_PlayerSleptOnErrand","F_PlayerUsedChemistrySet",
	"F_PreDATInit","F_PrincipalPOI","F_ProcessWakeUpMissionBasedLogic","F_ProjAttack","F_Puker","F_RaceSetCurrent","F_RainBeGone","F_RandomStudent",
	"F_Rats","F_ReachItHumiliation","F_RevengeOnMrBurton","F_RingSchoolBell","F_RollPropDice","F_RoofSniper","F_Russell","F_ScenarioManager",
	"F_SelectBrawlWeapon","F_SelectProjWeapon","F_SetCharacterModelsUnique","F_SetCutsceneName","F_SetCutsceneTableSize","F_SetRestartPoints","F_SetupBeforeMission","F_SetupBeforeMissionThread",
	"F_SetupHallowenPeds","F_SetupLockpickingGame","F_SetupMissionRequirements","F_SmokingFireman","F_SnowShovelAvailable","F_SocialHangout","F_SocialHumiliation","F_StealthSpottedText",
	"F_Straggler","F_Sweep","F_Swirlie","F_TableSize","F_TeacherHarassingKids","F_ToggleArcadeMachines","F_ToggleArcadeScreens","F_TrashStuff",
	"F_Truck","F_UnlockModelChanges","F_UnlockYearbookReward","F_VendettaGreasers","F_VendettaPreppies","F_VendorCheck","F_WallHangout","F_WallSmoking",
	"F_WindowsOpen","F_WorkerHangout","F_WorkerSmoking","F_Workout","F_Wrestling_FirstAttempt","GetGymModel","GetSkippedClasses","GetSkippingPunishment",
	"GetStudent","GetTextQueueSize","L_CutsceneFade","L_CutsceneSpecialInit","L_CutsceneSpecialShutdown","LoadModels","LoadPAnims","LoadPedModels",
	"LoadPedPOIModel","LoadPedPOIModels","LoadVehicleModels","LoadVehiclePOIModel","LoadWeaponModels","LoadWeaponPOIModel","ManagedPlayerSetPosPoint","ManagedPlayerSetPosXYZ",
	"NonMissionPedGenerationDisable","NonMissionPedGenerationEnable","POIActionNode2","PlayCutSceneForCheat","PlayCutSceneForCheatThread","PlayCutsceneWithLoad","QueueSoundSpeech","QueueText",
	"QueueTextString","RandomElement11","RandomElement13","RandomElement14","RandomElement2","RandomElement3","RandomElement4","RandomElement5",
	"RandomElement6","RandomElement7","RandomElement8","RandomIndex","RandomTableElement","SetSkippedClass","ShouldEventInitiate","SoundPlayScriptedSpeechEventWrapper",
	"T_ChristmasdLogic","T_ExpelledLogic","TutorialMessage","UnloadModels","UpdateAsylum","UpdateTextQueue","WaitAreaDATLoad","WaitInterruptible","WaitSkippable","dbg_print"
];
var dsl_library_functions = [
	["client",
		[5,[
			"ConnectToServer",
			"DisconnectFromServer",
			"GetServerList",
			"IsNetworkingAllowed",
			"RequestServerListing",
			"SendNetworkEvent"
		]]
	],
	["command",
		[1,[
			"SetCommand",
			"ClearCommand",
			"DoesCommandExist"
		]],
		[4,[
			"RunCommand"
		]]
	],
	["config",
		[1,[
			"LoadConfigFile",
			"IsConfigMissing",
			"GetConfigValue",
			"GetConfigNumber",
			"GetConfigBoolean",
			"GetConfigStrings",
			"AllConfigValues",
			"AllConfigStrings"
		]],
		[5,[
			"GetScriptConfig",
			"GetConfigString"
		]]
	],
	["console",
		[1,[
			"IsConsoleActive",
			"PrintOutput",
			"print",
			"PrintWarning",
			"PrintError"
		]],
		[5,[
			"PrintSpecial"
		]]
	],
	["content",
		[5,[
			"RegisterGameFile"
		]]
	],
	["event",
		[1,[
			"AddScriptLoaderCallback"
		]],
		[4,[
			"RegisterLocalEventHandler",
			"RemoveEventHandler",
			"RunLocalEvent"
		]],
		[5,[
			"RegisterNetworkEventHandler"
		]]
	],
	["file",
		[1,[
			"IsSystemAccessAllowed"
		]],
		[3,[
			"GetPackageFilePath"
		]],
		[4,[
			"OpenFile",
			"CloseFile",
			"FlushFile",
			"SeekFile",
			"ReadFile",
			"WriteFile",
			"SaveTable",
			"LoadTable"
		]],
		[7,[
			"CanWriteFiles"
		]],
		[8,[
			"GetScriptFilePath"
		]]
	],
	["hook",
		[5,[
			"GetBaseGameFunction"
		]],
		[6,[
			"HookFunction",
			"RemoveFunctionHook",
			"ReplaceFunction"
		]]
	],
	["input",
		[1,[
			"IsKeyPressed",
			"IsKeyBeingPressed",
			"IsKeyBeingReleased",
			"GetAnyKeyPressed",
			"GetAnyKeyBeingPressed",
			"StartTyping",
			"IsTypingActive",
			"GetTypingString",
			"WasTypingAborted",
			"StopTyping",
			"GetMouseInput"
		]],
		[4,[
			"IsKeyValid",
			"GetAnyKeyBeingReleased"
		]],
		[5,[
			"SetButtonPressed",
			"SetStickValue",
			"GetInputHardware",
			"IsUsingJoystick",
			"GetMouseScroll",
			"IsMousePressed",
			"IsMouseBeingPressed",
			"IsMouseBeingReleased"
		]],
		[6,[
			"ZeroController"
		]]
	],
	["locale",
		[4,[
			"RegisterLocalizedText",
			"ReplaceLocalizedText"
		]],
		[5,[
			"GetLocalizedText"
		]]
	],
	["manager",
		[1,[
			"DontAutoStartScript",
			"RequireLoaderVersion",
			"RequireSystemAccess",
			"LoadScript",
			"StartScript",
			"StartVirtualScript",
			"TerminateCurrentScript",
			"TerminateScript",
			"GetScriptEnvironment",
			"GetScriptSharedTable",
			"IsScriptRunning",
			"CreateThread",
			"CreateSystemThread",
			"CreateDrawingThread",
			"TerminateCurrentThread",
			"TerminateThread",
			"IsThreadRunning",
			"GetThreadWait",
			"Wait",
			"UseBaseGameScriptFunctions"
		]],
		[4,[
			"RequireDependency",
			"GetScriptCollection",
			"GetScriptName",
			"IsScriptZipped",
			"CreateAdvancedThread",
			"GetThreadName",
			"ImportScript"
		]],
		[7,[
			"AllowOnServer",
			"StopCurrentScriptCollection"
		]],
		[8,[
			"GetCurrentScript",
			"GetScriptNetworkTable"
		]]
	],
	["miscellaneous",
		[1,[
			"GetFrameTime",
			"GetPlayerName",
			"CallFunctionFromScript"
		]],
		[3,[
			"IsGamePaused"
		]],
		[4,[
			"GetPersistentDataTable",
			"GetSystemTimer",
			"IsDslScriptRunning",
			"IsActionNodeValid",
			"UseProxyScriptForFunction"
		]],
		[5,[
			"GetTimer",
			"ForceWindowUpdate",
			"GetInternalResolution",
			"GetScreenResolution",
			"QuitGame"
		]],
		[8,[
			"ObjectNameToHashID",
			"QuitServer"
		]]
	],
	["ped",
		[5,[
			"AllPeds",
			"PedGetModelId",
			"PedSetPosSimple",
			"PedSpoofModel"
		]],
		[6,[
			"PedCreateScriptless"
		]],
		[7,[
			"PedGetThrottle",
			"PedSetThrottle"
		]]
	],
	["pool",
		[6,[
			"GetPoolSize",
			"GetPoolUsage",
			"GetPoolSpace",
			"GetAllPoolInfo",
			"RequirePoolSize"
		]]
	],
	["render",
		[1,[
			"GetDisplayResolution",
			"GetDisplayAspectRatio",
			"DrawRectangle",
			"CreateTexture",
			"DrawTexture",
			"SetTextureBounds",
			"GetTextureResolution",
			"GetTextureAspectRatio",
			"GetTextureDisplayAspectRatio",
			"CreateFont",
			"DrawText",
			"MeasureText",
			"DiscardText",
			"SetTextPosition",
			"SetTextHeight",
			"SetTextScale",
			"SetTextFont",
			"SetTextAlign",
			"SetTextColor",
			"SetTextColour",
			"SetTextShadow",
			"SetTextOutline",
			"SetTextWrapping",
			"SetTextRedrawing",
			"GetTextFormatting",
			"SetTextFormatting"
		]],
		[2,[
			"SetTextBold",
			"SetTextItalic",
			"SetTextClipping",
			"PopTextFormatting"
		]],
		[3,[
			"DrawTexture2",
			"DrawTextInline"
		]],
		[4,[
			"MeasureTextInline",
			"ClearDisplay",
			"CreateRenderTarget",
			"DrawBackBufferOntoTarget",
			"SetRendererAlphaBlending"
		]],
		[5,[
			"SetDrawLayer",
			"SetTextBlack"
		]]
	],
	["savedata",
		[1,[
			"GetSaveDataTable",
			"GetRawSaveDataTable"
		]],
		[4,[
			"IsSaveDataReady"
		]]
	],
	["serialize",
		[1,[
			"PackData",
			"UnpackData"
		]],
		[4,[
			"PackTable",
			"UnpackTable"
		]]
	],
	["server",
		[5,[
			"AllPlayers",
			"GetPlayerIp",
			//"GetPlayerName",
			"GetServerHz",
			"IsPlayerValid",
			"KickPlayer"
			//"SendNetworkEvent"
		]]
	]
];

// Searchbar.
function updateSearchbar(input){
	var results = [];
	var links = document.getElementsByClassName("nav_cat_link");
	var main = document.getElementById("nav_main");
	var div = document.getElementById("nav_search_results");
	div.innerHTML = "";
	if(input != ""){
		var count = links.length;
		input = input.toLowerCase();
		while(count)
			if(links[--count].innerHTML.toLowerCase().includes(input))
				results.push(links[count].outerHTML);
		main.style.maxHeight = "0px";
		div.style.marginTop = "8px";
		div.innerHTML = "<h2 class=\"nav_big_cat\">Results (" + results.length + ")</h2>";
		while(results.length)
			div.innerHTML += results.pop();
	}else{
		div.style.marginTop = "0px";
		main.style.maxHeight = "none";
	}
}
function updateSearchbar2(input){
	if(input == "" || input.length >= 6)
		updateSearchbar(input);
}

// Functions.
function isValidFunction(name){
	var count = list_of_functions.length;
	while(count)
		if(list_of_functions[--count] == name)
			return true;
	return false;
}
function isLuaFunction(name){
	var count = list_of_lua_functions.length;
	while(count)
		if(list_of_lua_functions[--count] == name)
			return true;
	return false;
}
function getDslFunctionVersion(name){
	var result = 0;
	dsl_library_functions.forEach(function(data){
		var index;
		for(index = 1;index < data.length;index++){
			data[index][1].forEach(function(n){
				if(n == name){
					result = data[index][0];
					return;
				}
			})
			if(result)
				break;
		}
		if(result)
			return;
	});
	return result;
}
function makeNavFunctions(){
	var index = 0;
	var count = list_of_functions.length;
	var links = document.getElementById("nav_functions");
	while(index < count){
		var name = list_of_functions[index++];
		var link = document.createElement("a");
		link.href = "/function.html?" + name;
		link.className = "nav_cat_link";
		link.innerHTML = name;
		if(isLuaFunction(name)){
			var label = document.createElement("span");
			label.className = "lua_tag_link";
			label.innerHTML = "Lua";
			link.appendChild(label);
		}
		links.appendChild(link);
	}
}
function makeNavFunctionsDSL(){
	var index;
	var links = document.getElementById("nav_dsl_functions");
	var func_list = [];
	dsl_library_functions.forEach(function(data){
		var page_name = "/dsl/library/" + data[0] + ".html";
		for(index = 1;index < data.length;index++)
			data[index][1].forEach(function(str){
				var link = document.createElement("a");
				link.className = "nav_cat_link";
				link.href = str ? page_name + "?" + str : page_name;
				link.innerHTML = str ? str : "- view all functions";
				if(str){
					var label = document.createElement("span");
					label.className = "dsl_func_version";
					label.innerHTML = "DSL" + data[index][0];
					link.appendChild(label);
				}
				func_list.push([str,link]);
			});
	});
	func_list.sort(function(a,b){
		return a[0].localeCompare(b[0]);
	}).forEach(link => links.appendChild(link[1]));
}

// Miscellaneous.
function recolorVersionTagsDSL(name){
	var tags = document.getElementsByClassName(name);
	var count = tags.length;
	while(count){
		var tag = tags[--count];
		var version = tag.innerHTML;
		if(version == "DSL1")
			tag.style.backgroundColor = "#808080";
		else if(version == "DSL2")
			tag.style.backgroundColor = "#80D020";
		else if(version == "DSL3")
			tag.style.backgroundColor = "#2080FF";
		else if(version == "DSL4")
			tag.style.backgroundColor = "#FF40C0";
		else if(version == "DSL5")
			tag.style.backgroundColor = "#FF0000";
		else if(version == "DSL6")
			tag.style.backgroundColor = "#8020FF";
		else if(version == "DSL7")
			tag.style.backgroundColor = "#00C0FF";
		else if(version == "DSL8")
			tag.style.backgroundColor = "#C8C878";
	}
}

// Navigation.
function toggleCategory(name,hidden){
	var cat = name.parentElement;
	var links = cat.children[1];
	if(hidden == undefined)
		hidden = links.style.maxHeight && links.style.maxHeight != "0px";
	if(hidden)
		links.style.maxHeight = "0px";
	else if(links.id == "nav_functions")
		links.style.maxHeight = (links.scrollHeight + 64) + "px"; // give some room for error
	else
		links.style.maxHeight = links.scrollHeight + "px";
	links.style.marginBottom = hidden ? "0px" : "12px";
	links.style.visibility = hidden ? "hidden" : "inherit";
}
function clickCategory(name){
	toggleCategory(name);
	name.blur();
}
function pressCategory(name){
	if(event.key == "Enter")
		toggleCategory(name);
}
function openNavigation(){
	var nav = document.getElementById("nav");
	if(!use_manual_navigation)
		document.getElementById("navigate").style.visibility = "hidden";
	document.getElementById("content").style.marginLeft = nav.offsetWidth + "px";
	nav.style.visibility = "visible";
}
function closeNavigation(){
	var nav = document.getElementById("nav");
	document.getElementById("navigate").style.visibility = "visible";
	document.getElementById("content").style.marginLeft = "0px";
	nav.style.visibility = "hidden";
}
function toggleNavigation(){
	use_manual_navigation = true;
	if(document.getElementById("nav").style.visibility == "visible")
		closeNavigation();
	else
		openNavigation();
}
function updateNavigation(){
	if(!use_manual_navigation){
		var preference = window.outerWidth / window.outerHeight >= 1;
		if(preference != (document.getElementById("nav").style.visibility == "visible")){
			if(preference)
				openNavigation();
			else
				closeNavigation();
		}/*else if(preference)
			document.getElementById("content").style.marginLeft = document.getElementById("nav").offsetWidth + "px";*/
	}
}
function selectNavigation(){
	var main = document.getElementById("nav_main");
	var links = document.getElementsByClassName("nav_cat_link");
	var noext = !location.href.endsWith(".html");
	var count = links.length;
	while(count){
		var link = links[--count];
		var linkhref = link.href;
		if(noext && linkhref.endsWith(".html"))
			linkhref = linkhref.substring(0,linkhref.length-5);
		if(location.href.includes(linkhref)){
			var cat = link.parentElement.parentElement;
			toggleCategory(link.parentElement,false);
			if(cat.children[1].children.length <= 30) // include category name in scrolling?
				document.getElementById("nav_main").scrollTop = cat.offsetTop - main.offsetTop;
			else
				document.getElementById("nav_main").scrollTop = link.offsetTop - main.offsetTop;
			break;
		}
	}
}

// Request.
function includeNavigation(){
	if(this.readyState == 4 && this.status == 200){
		var temp = document.getElementById("nav");
		var main = document.getElementById("main");
		var nav = document.createElement("div");
		var btn = document.createElement("button");
		if(temp)
			temp.remove();
		nav.id = "nav";
		nav.innerHTML = this.responseText;
		btn.id = "navigate";
		btn.onclick = toggleNavigation;
		btn.innerHTML = "navigation";
		main.insertBefore(nav,main.children[0]);
		main.insertBefore(btn,nav);
		makeNavFunctions();
		makeNavFunctionsDSL();
		selectNavigation();
		updateNavigation();
		recolorVersionTagsDSL("dsl_version");
		recolorVersionTagsDSL("dsl_func_version");
		window.addEventListener("resize",updateNavigation);
	}
}
function requestNavigation(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = includeNavigation;
	request.open("GET","/navigation.html");
	request.send();
}

// Init.
(function(){
	if(window.outerWidth / window.outerHeight >= 1){
		var main = document.getElementById("main");
		var temp = document.createElement("div");
		var temp_main = document.createElement("div");
		temp.id = "nav";
		temp_main.id = "nav_main";
		temp_main.innerHTML = "<span style=\"color: #404040\">loading navigation</span>";
		temp.appendChild(temp_main);
		main.insertBefore(temp,main.children[0]);
		use_manual_navigation = true;
		openNavigation();
		use_manual_navigation = false;
	}
})();
requestNavigation();