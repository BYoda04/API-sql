import { Router } from "express";
import { methods as languageController } from "./../controllers/language.controller";

const router = Router();

router.get("/",languageController.getLanguages);
router.get("/:id",languageController.getLanguage);
router.get("/:category",languageController.getCategory);
router.post("/",languageController.addLanguage);
router.put("/:id",languageController.updateLanguage);
router.delete("/:id",languageController.deleteLanguage);

export default router;