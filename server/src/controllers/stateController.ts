import { Request, Response } from 'express';
import State from '../models/State';

export const createState = async (req: Request, res: Response) => {
  try {
    const { name, description, status, createdBy } = req.body;
    const newState = new State({
      name,
      description,
      status,
      createdBy,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    const state = await newState.save();
    res.json(state);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

export const getStates = async (req: Request, res: Response) => {
  try {
    const states = await State.find();
    res.json(states);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

export const updateState = async (req: Request, res: Response) => {
  try {
    const state = await State.findById(req.params.id);
    if (!state) {
      return res.status(404).json({ msg: 'State not found' });
    }
    const { name, description, status } = req.body;
    state.name = name || state.name;
    state.description = description || state.description;
    state.status = status || state.status;
    state.updatedAt = new Date();
    await state.save();
    res.json(state);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

export const deleteState = async (req: Request, res: Response) => {
  try {
    const state = await State.findById(req.params.id);
    if (!state) {
      return res.status(404).json({ msg: 'State not found' });
    }
    await state.remove();
    res.json({ msg: 'State removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
